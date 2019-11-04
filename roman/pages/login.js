import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            senha: null,
        };
    }

    _realizarLogin = async () => {
        await fetch('http://192.168.4.240:5000/api/usuarios', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
            .then(resposta => resposta.json())
            .then(data => this._irParaHome(data.token))
            .catch(erro => console.warn('deu ruim' + erro));
    };

    _irParaHome = async (tokenRecebido) => {
        if (tokenRecebido != null) {
            try {
                await AsyncStorage.setItem('@roman:token', tokenRecebido);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {

            }
        }
    };

    render() {
        return (
            <View>
                <TextInput placeholder='email' onChangeText={email => this.setState({ email })}></TextInput>
                <TextInput placeholder='senha' onChangeText={senha => this.setState({ senha })}></TextInput>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Login;