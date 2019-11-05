import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      projetos: [],
      nome: null,
      descricao: null,
      idTema: null,
      idProfessor: null
    };
  }

  componentDidMount() {
    this._carregarProjetos();
  }

  _carregarProjetos = async () => {
    await fetch('http://192.168.4.240:5000/api/projetos')
      .then(resposta => resposta.json())
      .then(data => this.setState({ projetos: data }))
      .catch(erro => console.warn(erro));
  };

    _realizarCadastro = async () => {
      await fetch('http://192.168.4.240:5000/api/projetos', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: this.state.nome,
        descricao: this.state.descricao,
        idTema: this.state.idTema,
        idProfessor: this.state.idProfessor
      }),
    })
      .then(this._carregarProjetos)
      .catch(error => console.log(error));
  }


  render() {
    return (
      <View>
        <View>
          <TextInput placeholder='nome do projeto' onChangeText={nome => this.setState({ nome })}></TextInput>
          <TextInput placeholder='descrição' onChangeText={descricao => this.setState({ descricao })}></TextInput>
          <TextInput placeholder='id tema' onChangeText={idTema => this.setState({ idTema })}></TextInput>
          <TextInput placeholder='id professor' onChangeText={idProfessor => this.setState({ idProfessor })}></TextInput>
          <TouchableOpacity onPress={this._realizarCadastro}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.projetos}
          keyExtractor={item => item.idProjeto}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.descricao}</Text>
              <Text>{item.idTema}</Text>
              <Text>{item.idProfessor}</Text>
            </View>
          )} />
        
      </View>
    );
  }
}
export default Main;
