# Y.js

<p>A small javascript library developed for learning purpose .This library is best for those who want to learn how javascript libraries were created</p>

## Getting Started

First include script using script tag:

```sh
    <script src="your download folder/index.js"></script>
```

To select all P tags :

```sh
    Y('p')
```

To show or hide HTML elements :

```sh
    Y('element').hide();
    Y('element').show();
```

To get value ond text of element:

```sh
    Y('element').value();
    Y('element').text();
```

To add and remove class from element:

```sh
    Y('element').addClass('class name); or   Y('element').addClass({'className1',className2',...});
    Y('element').removeClass('class name); or   Y('element').removeClass({'className1',className2',...});
