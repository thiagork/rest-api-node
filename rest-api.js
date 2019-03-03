/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

let tempMovies = [{
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    director: 'David Fincher'
},
{
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    director: 'Christopher Nolan'
},
{
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    director: 'Christopher Nolan'
},
{
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    director: 'The Wachowski Brothers'
},
{
    title: 'Snatch',
    year: 2000,
    genre: 'Comedy',
    director: 'Guy Ritchie'
},
{
    title: 'The Usual Suspects',
    year: 1995,
    genre: 'Thriller',
    director: 'Bryan Singer'
},
{
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    director: 'Christopher Nolan'
},
{
    title: 'Terminator 2: Judgement Day',
    year: 1991,
    genre: 'Sci-Fi',
    director: 'James Cameron'
},
{
    title: 'Gladiator',
    year: 2000,
    genre: 'Drama',
    director: 'Ridley Scott'
},
{
    title: 'Shutter Island',
    year: 2010,
    genre: 'Thriller',
    director: 'Martin Scorsese'
}
];
let tempDirectors = [
    {
        name : 'David Fincher',
        bio : `David Fincher was born in 1962 in Denver, Colorado, and was raised in Marin County, California. When he was 18 years old he went to work for John Korty at Korty Films in Mill Valley. He subsequently worked at ILM (Industrial Light and Magic) from 1981-1983. Fincher left ILM to direct TV commercials and music videos after signing with N. Lee Lacy in Hollywood. He went on to found Propaganda in 1987 with fellow directors Dominic Sena, Greg Gold and Nigel Dick. Fincher has directed TV commercials for clients that include Nike, Coca-Cola, Budweiser, Heineken, Pepsi, Levi's, Converse, AT&T and Chanel. He has directed music videos for Madonna, Sting, The Rolling Stones, Michael Jackson, Aerosmith, George Michael, Iggy Pop, The Wallflowers, Billy Idol, Steve Winwood, The Motels and, most recently, A Perfect Circle.

        As a film director, he has achieved huge success with Se7en (1995), Fight Club (1999) and, Panic Room (2002).`,
        birthYear : '1962'
    },
    {
        name : 'Christopher Nolan',
        bio : `Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970 in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.

        At 7 years old, Nolan began making short movies with his father's Super-8 camera. While studying English Literature at University College London, he shot 16-millimetre films at U.C.L.'s film society, where he learned the guerrilla techniques he would later use to make his first feature, Following (1998), on a budget of around $6,000. The noir thriller was recognized at a number of international film festivals prior to its theatrical release, and gained Nolan enough credibility that he was able to gather substantial financing for his next film.
        
        Nolan's second film was Memento (2000), which he directed from his own screenplay based on a short story by his brother Jonathan. Starring Guy Pearce, the film brought Nolan numerous honors, including Academy Award and Golden Globe Award nominations for Best Original Screenplay. Nolan went on to direct the critically acclaimed psychological thriller, Insomnia (2002), starring Al Pacino, Robin Williams and Hilary Swank.
        
        The turning point in Nolan's career occurred when he was awarded the chance to revive the Batman franchise in 2005. In Batman Begins (2005), Nolan brought a level of gravitas back to the iconic hero, and his gritty, modern interpretation was greeted with praise from fans and critics alike. Before moving on to a Batman sequel, Nolan directed, co-wrote, and produced the mystery thriller The Prestige (2006), starring Christian Bale and Hugh Jackman as magicians whose obsessive rivalry leads to tragedy and murder.
        
        In 2008, Nolan directed, co-wrote, and produced The Dark Knight (2008) which went on to gross more than a billion dollars at the worldwide box office. Nolan was nominated for a Directors Guild of America (D.G.A.) Award, Writers Guild of America (W.G.A.) Award and Producers Guild of America (P.G.A.) Award, and the film also received eight Academy Award nominations.
        
        In 2010, Nolan captivated audiences with the sci-fi thriller Inception (2010), which he directed and produced from his own original screenplay. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000 dollars and becoming one of the most discussed and debated films of the year. Among its many honors, Inception received four Academy Awards and eight nominations, including Best Picture and Best Screenplay. Nolan was recognized by his peers with D.G.A. and P.G.A. Award nominations, as well as a W.G.A. Award for his work on the film.
        
        One of the best-reviewed and highest-grossing movies of 2012, The Dark Knight Rises (2012) concluded Nolan's Batman trilogy. Due to his success rebooting the Batman character, Warner Bros. enlisted Nolan to produce their revamped Superman movie Man of Steel (2013), which opened in the summer of 2013. In 2014, Nolan directed, wrote, and produced the science fiction epic Interstellar (2014), starring Matthew McConaughey, Anne Hathaway and Jessica Chastain. Paramount Pictures and Warner Bros. released the film on November 5, 2014 to positive reviews and strong box-office results, grossing over $670 million dollars worldwide.
        
        Nolan resides in Los Angeles, California with his wife, producer Emma Thomas, and their children. Nolan and Thomas also have their own production company, Syncopy.`,
        birthYear : '1970'
    },
    {
        name : 'The Wachowski Brothers',
        bio : `Lana Wachowski[a] (born June 21, 1965) and Lilly Wachowski[b] (born December 29, 1967) are American film and TV directors, writers, and producers. They are sisters, and both are trans women. Collectively known as The Wachowskis[c] (/wəˈtʃaʊski/), they have worked as a writing and directing team through most of their professional film careers.

        They made their directing debut in 1996 with Bound, and achieved fame with their second film The Matrix (1999), a major box office success for which they won the Saturn Award for Best Director. They wrote and directed its two sequels: The Matrix Reloaded and The Matrix Revolutions (both in 2003), and were involved in the writing and production of other works in that franchise.
        
        Following the commercial success of The Matrix series, they wrote and produced the 2005 film V for Vendetta (an adaptation of the graphic novel by Alan Moore), and in 2008 released the film Speed Racer, a live-action adaptation of the Japanese anime series. Their next film, Cloud Atlas, based on the novel by David Mitchell and co-written and co-directed by Tom Tykwer, was released in 2012. Their film Jupiter Ascending and the Netflix series Sense8, which they co-created with J. Michael Straczynski, both debuted in 2015; the second season of Sense8 in 2016 was Lana's first major creative undertaking without Lilly, who took a break for it.`,
        birthYear : '1965 (Lana), 1967 (Lilly)'
    },
    {
        name : 'Guy Ritchie',
        bio : `Guy Ritchie was born in Hatfield, Hertfordshire, UK on September 10, 1968. After watching Butch Cassidy and the Sundance Kid (1969) as a child, Guy realized that what he wanted to do was make films. He never attended film school, saying that the work of film school graduates was boring and unwatchable. At 15 years old, he dropped out of school and in 1995, got a job as a runner, ultimately starting his film career. He quickly progressed and was directing music promos for bands and commercials by 1995.

        The profits that he made from directing these promos was invested into writing and making the film The Hard Case (1995), a 20-minute short film that is also the prequel to his debut feature Lock, Stock and Two Smoking Barrels (1998). Sting's wife, Trudie Styler, saw The Hard Case (1995) and invested in the feature film. Once completed, 10 British distributors turned the film down before it eventually was released in the UK in 1998 and in the US in 1999; the film put Ritchie on the map as one of the hottest rising filmmakers of the time, and launched the careers of actors Jason Statham, Jason Flemyng, and Vinnie Jones, among others.
        
        Lock, Stock and Two Smoking Barrels (1998) was followed by Snatch (2000), this time with a bigger budget and a few more familiar faces such as Brad Pitt, Dennis Farina, Benicio Del Toro alongside returning actors Jason Statham, Vinnie Jones and Jason Flemyng. At the end of 2000, Ritchie married the pop superstar Madonna in Scotland, and proceeded to work with his famous wife on a variety of film and video projects, including the short Star (2001), made for BMW and co-starring Clive Owen, and the controversial video "What It Feels Like for a Girl," which was called out for its violence. In 2002, the couple embarked on a remake of the 1974 Lina Wertmüller film Swept Away (2002); the new film was a critical and commercial flop, winning five Razzie Awards. Ritchie followed up with the Vegas heist film Revolver (2005), which was panned, but won favor with the crime thriller RocknRolla (2008), which featured a game, energetic cast and brought American attention to rising stars Gerard Butler and Tom Hardy.
        
        The next year saw the release of Sherlock Holmes (2009), starring Robert Downey Jr. in the title role and Jude Law as his cohort Dr. Watson. The film received mostly good reviews but, more important for Ritchie's career, was a solid blockbuster hit that grossed more than $520 million dollars worldwide and spawned a sequel, Sherlock Holmes: A Game of Shadows (2011). Ritchie is tentatively scheduled to direct an adaptation of Robert Louis Stevenson's Treasure Island.
        
        Ritchie has two sons with Madonna: Rocco, born in 2000, and an adopted son, David, born in 2005. In late 2008, the couple confirmed reports that they were splitting up, and agreed to a divorce settlement that was finalized in December of that year. In September 2011, Ritchie's girlfriend, model Jacqui Ainsley, gave birth to a son, Rafael, and in July 2012 the couple announced they were expecting their second child.`,
        birthYear : '1968'
    },
    {
        name : 'Bryan Singer',
        bio : `Bryan Singer was born on September 17, 1965 in New York City, New York, USA as Bryan Jay Singer. He is a producer and director, known for X-Men (2000), The Usual Suspects (1995) and Superman Returns (2006).`,
        birthYear : '1965'
    },
    {
        name : 'James Cameron',
        bio : `James Francis Cameron was born on August 16, 1954 in Kapuskasing, Ontario, Canada. He moved to the United States in 1971. The son of an engineer, he majored in physics at California State University before switching to English, and eventually dropping out. He then drove a truck to support his screenwriting ambition. He landed his first professional film job as art director, miniature-set builder, and process-projection supervisor on Roger Corman's Battle Beyond the Stars (1980) and had his first experience as a director with a two week stint on Piranha II: The Spawning (1981) before being fired. In 1984, he wrote and directed The Terminator (1984), a futuristic action-thriller starring Arnold Schwarzenegger, Michael Biehn and Linda Hamilton. It was a huge success. After this came a string of successful science-fiction action films such as Aliens (1986), The Abyss (1989) and Terminator 2: Judgment Day (1991). In 1990, Cameron formed his own production company, Lightstorm Entertainment. In 1997, he wrote and directed Titanic (1997), a romance epic about two young lovers from different social classes who meet on board the famous ship. The movie went on to break all box office records and earned eleven Academy Awards. It became the highest grossing movie of all time. The rest is history. James Cameron is now one of the most sought-after directors in Hollywood. He was formerly married to producer Gale Anne Hurd, who produced several of his films. In 2000, he married actress Suzy Amis, who appeared in Titanic, and they have three children.`,
        birthYear : '1954'
    },
    {
        name : 'Ridley Scott',
        bio : `Described by film producer Michael Deeley as "the very best eye in the business", director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham). His father was an officer in the Royal Engineers and the family followed him as his career posted him throughout the United Kingdom and Europe before they eventually returned to Teesside. Scott wanted to join the Royal Army (his elder brother Frank had already joined the Merchant Navy) but his father encouraged him to develop his artistic talents instead and so he went to West Hartlepool College of Art and then London's Royal College of Art where he helped found the film department.

        In 1962, he joined the BBC as a trainee set designer working on several high profile series. He attended a trainee director's course while he was there and his first directing job was on an episode of the popular BBC police series Z Cars (1962), Z Cars: Error of Judgement (1965). More TV work followed until, frustrated by the poor financial rewards at the BBC, he went into advertising. With his younger brother, Tony Scott, he formed the advertising production company RSA (Ridley Scott Associates) in 1967 and spent the next 10 years making some of the best known and best loved TV adverts ever shown on British television, including a series of ads for Hovis bread set to the music of Dvorak's New World Symphony which are still talked about today ("'e were a great baker were our dad.")
        
        He began working with producer David Puttnam in the 1970s developing ideas for feature films. Their first joint endeavor, The Duellists (1977) won the Jury Prize for Best First Work at Cannes in 1977 and was nominated for the Palm d'Or, more than successfully launching Scott's feature film career. The success of Star Wars: Episode IV - A New Hope (1977) inspired Scott's interest in making science fiction and he accepted the offer to direct Dan O'Bannon's low budget science fiction horror movie Alien (1979), a critical and commercial success that firmly established his worldwide reputation as a movie director.
        
        Blade Runner (1982) followed in 1982 to, at best, a lukewarm reception from public and critics but in the years that followed, its reputation grew - and Scott's with it - as one of the most important sci-fi movies ever made. Scott's next major project was back in the advertising world where he created another of the most talked-about advertising spots in broadcast history when his "1984"-inspired ad for the new Apple Macintosh computer was aired during the Super Bowl on January 22, 1984. Scott's movie career has seen a few flops (notably Legend (1985) and 1492 - Die Eroberung des Paradieses (1992)), but with successes like Thelma & Louise (1991), Gladiator (2000) and Black Hawk Down (2001) to offset them, his reputation remains solidly intact.
        
        Ridley Scott was awarded Knight Bachelor of the Order of the British Empire at the 2003 Queen's New Year Honours for his "substantial contribution to the British film industry". On July 3, 2015, he was awarded an honorary doctorate by the Royal College of Art in a ceremony at the Royal Albert Hall in London. He was awarded the BAFTA Fellowship in 2018. BAFTA described him as "a visionary director, one of the great British film-makers whose work has made an indelible mark on the history of cinema. Forty years since his directorial debut, his films continue to cross the boundaries of style and genre, engaging audiences and inspiring the next generation of film talent."`,
        birthYear : '1937'
    },
    {
        name : 'Martin Scorsese',
        bio : `Martin Charles Scorsese was born on November 17, 1942 in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily. He was raised in the neighborhood of Little Italy, which later provided the inspiration for several of his films. Scorsese earned a B.S. degree in film communications in 1964, followed by an M.A. in the same field in 1966 at New York University's School of Film. During this time, he made numerous prize-winning short films including The Big Shave (1967), and directed his first feature film, Who's That Knocking at My Door (1967).

        He served as assistant director and an editor of the documentary Woodstock (1970) and won critical and popular acclaim for Mean Streets (1973), which first paired him with actor and frequent collaborator Robert De Niro. In 1976, Scorsese's Taxi Driver (1976), also starring De Niro, was awarded the Palme d'Or at the Cannes Film Festival, and he followed that film with New York, New York (1977) and The Last Waltz (1978). Scorsese directed De Niro to an Oscar-winning performance as boxer Jake LaMotta in Raging Bull (1980), which received eight Academy Award nominations, including Best Picture and Best Director, and is hailed as one of the masterpieces of modern cinema. Scorsese went on to direct The Color of Money (1986), The Last Temptation of Christ (1988), Goodfellas (1990), Cape Fear (1991), The Age of Innocence (1993), Casino (1995) and Kundun (1997), among other films. Commissioned by the British Film Institute to celebrate the 100th anniversary of the birth of cinema, Scorsese completed the four-hour documentary, A Personal Journey with Martin Scorsese Through American Movies (1995), co-directed by Michael Henry Wilson.
        
        His long-cherished project, Gangs of New York (2002), earned numerous critical honors, including a Golden Globe Award for Best Director; the Howard Hughes biopic The Aviator (2004) won five Academy Awards, in addition to the Golden Globe and BAFTA awards for Best Picture. Scorsese won his first Academy Award for Best Director for The Departed (2006), which was also honored with the Director's Guild of America, Golden Globe, New York Film Critics, National Board of Review and Critic's Choice awards for Best Director, in addition to four Academy Awards, including Best Picture. Scorsese's documentary of the Rolling Stones in concert, Shine a Light (2008), followed, with the successful thriller Shutter Island (2010) two years later. Scorsese received his seventh Academy Award nomination for Best Director, as well as a Golden Globe Award, for Hugo (2011), which went on to win five Academy Awards.
        
        Scorsese also serves as executive producer on the HBO series Boardwalk Empire (2010) for which he directed the pilot episode. Scorsese's additional awards and honors include the Golden Lion from the Venice Film Festival (1995), the AFI Life Achievement Award (1997), the Honoree at the Film Society of Lincoln Center's 25th Gala Tribute (1998), the DGA Lifetime Achievement Award (2003), The Kennedy Center Honors (2007) and the HFPA Cecil B. DeMille Award (2010). Scorsese and actor Leonardo DiCaprio have worked together on five separate occasions: Gangs of New York (2002), The Aviator (2004), The Departed (2006), Shutter Island (2010) and The Wolf of Wall Street (2013).`,
        birthYear : '1942'
    }
];
let tempUsers = [
    {
      id : 1,
      name : "Jessica Drake",
      email : "jessicadrake@fakeemail.com",
      dateOfBirth : "01/01/1991",
      favoriteMovies : []
    },
    {
      id : 2,
      name : "Ben Cohen",
      email : "bencohen@fakeemail.com",
      dateOfBirth : "02/02/1982",
      favoriteMovies : []
    },
    {
      id : 3,
      name : "Lisa Downing",
      email : "lisadowning@fakeemail.com",
      dateOfBirth : "03/03/2003",
      favoriteMovies : []
    }
  ];


// Returns a list of ALL movies to the user
app.get('/movies', (req, res) => {
    res.json(tempMovies);
});

// Returns data about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
    res.json(tempMovies.find((movie) => {
        return movie.title === req.params.title
    }));
});

// Returns data about a genre (description) by name/title (e.g., “Thriller”)
app.get('/movies/genres/:genre', (req, res) => {
    res.json(tempMovies.filter(movie => {
        return movie.genre === req.params.genre;
    }));
});

// Returns data about a director (bio, birth year, death year) by name
app.get('/directors/:director', (req, res) => {
    res.json(tempDirectors.find((obj) => {
        return obj.name === req.params.director
    }));
});

// For testing purposes, returns a list of all users (won't be listed on documentation.html)
app.get('/users', (req, res) => {
    res.json(tempUsers);
});

// Allow new users to register
app.post('/users', (req, res) => {
    let newUser = req.body;
  
    if (!newUser.name) {
      const message = "Missing name in request body";
      res.status(400).send(message);
    } else {
      newUser.id = uuid.v4();
      tempUsers.push(newUser);
      res.status(201).send(newUser);
    }
});

// Allow users to update their user info (email, date of birth)
app.put('/users/:name/:email/:dateOfBirth', (req, res) => {
    let user = tempUsers.find((user) => { return user.name === req.params.name });
  
    if (user) {
      user.email = req.params.email;
      user.dateOfBirth = req.params.dateOfBirth;
      res.status(201).send("User " + req.params.name + " changed email to " + req.params.email + " and date of birth to " + req.params.dateOfBirth);
    } else {
      res.status(404).send("User: " + req.params.name + " not found.")
    }
});

// Allow users to add a movie to their list of favorites
app.post('/users/:name/favorites', (req, res) => {
    let newFavoriteMovie = req.body;

    if (!newFavoriteMovie) {
        const message = "Missing movie name in request body";
        res.status(400).send(message);
    } else {
        let user = tempUsers.find((user) => { return user.name === req.params.name });
        user.favoriteMovies.push(newFavoriteMovie.movie);
        res.status(201).send(user.favoriteMovies);
    }
});

// Allow users to remove a movie from their list of favorites
app.delete('/users/:name/favorites', (req, res) => {
    let removeFavoriteMovie = req.body;

    if (!removeFavoriteMovie) {
        const message = "Missing movie name in request body";
        res.status(400).send(message);
    } else {
        let user = tempUsers.find((user) => { return user.name === req.params.name });
        let newFavoriteMovies = user.favoriteMovies.filter(obj => {return obj !== removeFavoriteMovie.movie;});
        user.favoriteMovies = newFavoriteMovies;
        res.status(201).send(newFavoriteMovies);
    }
});

// Allow users to deregister
app.delete('/users/:name', (req, res) => {
    let user = tempUsers.find(user => {
        return user.name === req.params.name;
    });
    if (!user) {
        res.status(400).send('User not found.');
    } else {
        let newUserList = tempUsers.filter(obj => {
            return obj !== user;
        });
        tempUsers = newUserList;
        res.status(201).send(`User ${req.params.name} was deleted.`);
    }
});

// Serves documentation file
app.get('/documentation', (req, res) => {
    res.sendFile('/public/documentation.html', { root: __dirname })
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});