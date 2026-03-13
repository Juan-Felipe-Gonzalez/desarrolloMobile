const Drawer = createDraweNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerActiveTintColor: "pink",
                    drawerInactiveTintColor: "black",
                    drawerStyle: {
                        backgroundColor: "white",
                        width: 240
                    }
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Mi restaurante"
                    }}
                />
                <Drawer.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        title: "Detalles de la orden"
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App
