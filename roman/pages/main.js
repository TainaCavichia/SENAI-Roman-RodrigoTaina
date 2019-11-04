import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {
 
  constructor() {
    super();
    this.state = {
      projetos: [],
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

  render() {
    return (
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
        )}
      />
    );
  }
}
export default Main;
