import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

export default function homeScreen (){
  const[tarefa, setTarefa]=useState('');
  const[tarefas, setTarefas]=useState([


    'Estudar React-native',
    'Aprender useState',
    'Criar a primeira tela',
  ])
  
  return(
<view style={styles.container}>
  <text>Gerenciador de tarefas </text>
  <TextInput
  placeholder='Digite uma tareda'/>

</view>
);

}

// Criando o estilo para o index.tsx
const styles=StyleSheet.create ({
  container:{
    flex: 1,
    padding: 20
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,

  },

})