import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native/types_generated/index'
 
const App = () => {
  return (
    <SafeAreaView>
      <Text>Mi primer Proyecto de reactr native</Text>
      <TextInput/>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});
export default App