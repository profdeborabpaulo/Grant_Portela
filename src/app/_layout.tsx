import { Stack } from "expo-router";
import { StackTitle } from "expo-router/build/layouts/stack-utils";

export default function layout () {
  return(
    <Stack>
      <Stack.Screen
      name= "index"
      options={{
        title:"agendadpr de tarefas"
      }}
      />

    <Stack.Screen
    name='nova-tarefa'
    options={{
      title: "nova Tarefa"
    }}
    />

    </Stack>
 
)
}