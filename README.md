####Network Request
https://www.youtube.com/watch?time_continue=291&v=OrBKbQbobC0&feature=emb_logo
* when you type a url in a browser and hit enter a network request fires
* http request happens on top of a TCPIP connection
* FrontEnd Routing uses javascript to manipulate the url and change it without causing actual request, we can then conditionally render things depending on the url, SO NO ACTUAL NETWORK REQUEST ARE BEING MADE

#React Router: client side

##Link: programatically changes the url in the browser, allowing us to render different components. 

##BrowserRouter
* Must be used with Link or you will get an error
* Only needs to be used once in the application, you can wrap the entire application in the BrowserRouter in the index.js file
            
            ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.getElementById('root')
                );

##Route
https://www.youtube.com/watch?time_continue=45&v=ZLpRLXsPNHs&feature=emb_logo
* Used to allow only one component to be rendered at a time. Takes a path and a component
` <Route path = '/about' component = {About} />`
* Route can also take an exact prop that allows only the exact path to be rendered `<Route exact path = '/' component = {Home} />`
* Componenets rendered `<Route></Route>`, come with some location, history, and match related props
    * Location: about where you are in the app
    * History:provide methods we can use to change locations imparatively
    * Match: conatins information about a particular Route matched the cuerrent location, can also be used to pull dynamic parameters from a url