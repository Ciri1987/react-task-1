/*var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król lew'),
                React.createElement('p', {}, 'Film o królu sawanny')
            )
        )
    );*/
;

var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51cKvT6lcaL.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51wiXuONYmL.jpg'
    },

    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Film o hobbitach',
        image: 'https://imgc.allpostersimages.com/img/print/u-g-F4PYQQ0.jpg?w=292&h=450'
    },
    {
        id: 4,
        title: 'Gwiezdne Wojny',
        desc: 'Dawno, dawno temu w odległej galaktyce',
        image: 'http://www.movieposter.com/posters/archive/main/13/A70-6945'
    }

];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.image
        }, )
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'))