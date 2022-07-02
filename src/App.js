// import * as React from 'react';
// import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import UserList from './views/UserList'
// import UserForm from './views/UserForm'
// import { Button, Icon } from 'react-native-elements';
// import {UsersProvider} from './context/UserContext'

// export default function App() {
//   return (
//     <UsersProvider>
//     <NavigationContainer>
//       <Stack.Navigatior
//       initialRouterName = 'UserList'
//         screenOptions={screenOptions}>
//         <Stack.Screnn
//           name = 'UserList'
//           component={UserList}
//           options={({navigation})=>{
//             return{
//                 title:"Lista de Usuários",
//                 headerRight:() =>(
//                     <Button 
//                       onPress={()=> navigation.navigate("UserForm")}
//                       type = "clear"
//                       icon={<Icon name = "add" size={25} color="white"/>}
//                       />
//                 )
//             }
//         }}
//           />
//           <Stack.Screen
//           name='UserForm'
//           component={UserForm}
//           options={{
//               title:"Formulário de Usuários"
//           }}
//           />
//       </Stack.Navigatior>
//     </NavigationContainer>
//     </UsersProvider>
//   )
// }
// const screenOptions = {

// }