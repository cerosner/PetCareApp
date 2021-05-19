- Mobile broswer = WebView
- Consider port view and 'event handlers' like tap and mic access
- OS may not provide all features that are available in WebView

- React Native uses JavaScriptCore (default JS iOS engine and Safari)

- Each React Component requires a `render` function
- Return XML-based (JSX) that represents DOM elements
- JSX turns XML into functions
- Taking a quick look at the component tells us what it's supposed to do
  ex. `<FriendList />` might render `<Friend />` components

```
var MyComponent = function() {
  this.render = function() {
    return React.createElement("div", {
      className: "my-component"
    }, "Hello")
  }
}
```

- Props = attributes of content in a Component
- Pass in props directly to a Component to use them inside the constructed component
- Tree-like structure, pass data down to child elements

```
var Hello = function(props) {
  this.render = function() {
    return <div className="my-component">Hello {props.name}</div>
  }
}
// child component
var Greeter = function() {
  this.render = function() {
    return <Hello name ="there" />
  }
}
```

- Components have an internal state
- Each prop or state change re-renders component
- "Virtual DOM" represents the updated DOM, more efficient than generating real DOM elements because only specific changes are applied
