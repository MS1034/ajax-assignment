# Report
## Research & Overview of AJAX

### What is AJAX?

1. AJAX stands for **Asynchronous JavaScript And XML**. 
2. Ajax is not a new technology, nor is it a new language. Instead, it is existing technologies used in a new way (a programming concept).
3.  It send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page.
4.   To change content dynamically without the need to reload the entire page.
5.   It decoupling the data interchange layer from the presentation layer. 

### Working of AJAX

1. Some event happens on a webpage. For instance, the page loads, or a user clicks on a particular button.
2. JavaScript creates an XMLHttpRequest object.
3. This object sends a request to the corresponding web server.
4. The server processes the request and sends a response back to the browser.
5. JavaScript reads the response.
6. JavaScript performs the proper action, depending on the triggering event.



![Ajax Illustration](https://www.tutorialrepublic.com/lib/images/ajax-illustration.png)

### XMLHttpRequest

 It is an API in the form an object whose methods help in transfer of data between a web browser and a web server.

```javascript
var xhttp = new XMLHttpRequest();
```

**Properties of XMLHttpRequest object**

`readystate` is a property of the XMLHttpRequest Object which holds the status of the XMLHttpRequest.

- 0: request not initialized
- 1: server connection established
- 2: request received
- 3: processing request
- 4: request finished and response is ready

`onreadystatechange` is a property of the XMLHttpRequest Object which defines a function to be called when the readyState property changes.
`status` is a property of the XMLHttpRequest Object which returns the status-number of a request

- 200: "OK"
- 403: "Forbidden"
- 404: "Not Found"

**XMLHttpRequest Object Methods** :

To send a request to a Web Server, we use the open() and send() methods of the XMLHttpRequest object.

```javascript
xhttp.open("GET", "content.txt", true);
xhttp.send();
```

<img src="https://miro.medium.com/v2/resize:fit:676/1*KFQPD8nVmlVyV5An6_Dx-A.png" alt="img" style="zoom: 67%;" />

### JSON in AJAX

Initially, AJAX used XML as the data format for communication between the client and server. However, XML has a more complex structure and is heavier than JSON. With the advent of JSON, developers started to prefer JSON for its simplicity, readability, and ease of parsing in JavaScript. JSON became popular due to reasons below:

1. Simpler Parsing
2. Lightweight and Human-Readable
3. Easier Integration with JavaScript
4. Increased Popularity of RESTful APIs hyped JSON
5. JSONP for Cross-Domain Requests

## Practical Implementation

## Challenges of Using AJAX

## The Future of AJAX 
