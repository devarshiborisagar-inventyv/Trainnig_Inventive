# SQL Movie Database Queries

## 1. Write a SQL query to find the name and year of the movies. Return movie title, movie release year.

```sql
select mov_title,mov_year from movie;
```

| mov_title                | mov_year |
|--------------------------|----------|
| Vertigo                  | 1958     |
| The Innocents            | 1961     |
| Lawrence of Arabia       | 1962     |
| The Deer Hunter          | 1978     |
| Amadeus                  | 1984     |
| Blade Runner             | 1982     |
| Eyes Wide Shut           | 1999     |
| The Usual Suspects       | 1995     |
| Chinatown                | 1974     |
| Boogie Nights            | 1997     |
| Annie Hall               | 1977     |
| Princess Mononoke        | 1997     |
| The Shawshank Redemption | 1994     |
| American Beauty          | 1999     |
| Titanic                  | 1997     |
| Good Will Hunting        | 1997     |
| Deliverance              | 1972     |
| Trainspotting            | 1996     |
| The Prestige             | 2006     |
| Donnie Darko             | 2001     |
| Slumdog Millionaire      | 2008     |
| Aliens                   | 1986     |
| Beyond the Sea           | 2004     |
| Avatar                   | 2009     |
| Seven Samurai            | 1954     |
| Spirited Away            | 2001     |
| Back to the Future       | 1985     |
| Braveheart               | 1995     |

## 2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.

```sql
select mov_year from movie where mov_title='American Beauty';
```

| mov_year |
|----------|
| 1999     |

## 3. Write a SQL query to find the movie that was released in 1999. Return movie title.

```sql
select mov_title from movie where mov_year=1999;
```

| mov_title       |
|-----------------|
| Eyes Wide Shut  |
| American Beauty |

## 4. Write a SQL query to find those movies, which were released before 1998. Return movie title.

```sql
select mov_title from movie where mov_year<1998;
```

| mov_title                |
|--------------------------|
| Vertigo                  |
| The Innocents            |
| Lawrence of Arabia       |
| The Deer Hunter          |
| Amadeus                  |
| Blade Runner             |
| The Usual Suspects       |
| Chinatown                |
| Boogie Nights            |
| Annie Hall               |
| Princess Mononoke        |
| The Shawshank Redemption |
| Titanic                  |
| Good Will Hunting        |
| Deliverance              |
| Trainspotting            |
| Aliens                   |
| Seven Samurai            |
| Back to the Future       |
| Braveheart               |

## 5. Write a SQL query to find the name of all reviewers and movies together in a single list.

```sql
select mov_title,rev_name from movie m join movie_rating mr on m.mov_id=mr.mov_id join movie_reviewer mrr on mr.rev_id=mrr.rev_id;
```

| mov_title           | rev_name           |
|---------------------|-------------------|
| Vertigo             | Righty Sock        |
| The Innocents       | Jack Malvern       |
| Lawrence of Arabia  | Flagrant Baronessa |
| Blade Runner        |                    |
| The Usual Suspects  | Simon Wright       |
| Chinatown           | Neal Wruck         |
| Boogie Nights       | Paul Monks         |
| Annie Hall          | Mike Salvati       |
| Princess Mononoke   |                    |
| American Beauty     | Sasha Goldshtein   |
| Titanic             | Righty Sock        |
| Good Will Hunting   | Josh Cates         |
| Trainspotting       | Scott LeBrun       |
| Donnie Darko        | Hannah Steele      |
| Slumdog Millionaire | Vincent Cadena     |
| Aliens              | Brandt Sponseller  |
| Beyond the Sea      | Richard Adams      |
| Avatar              | Victor Woeltjen    |
| Seven Samurai       | Krug Stillo        |

## 6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.

```sql
select rev_name from movie m join movie_rating mr on m.mov_id=mr.mov_id join movie_reviewer mrr on mr.rev_id=mrr.rev_id where mr.rev_stars>=7;
```

| rev_name           |
|--------------------|
| Righty Sock        |
| Jack Malvern       |
| Flagrant Baronessa |
|                    |
| Simon Wright       |
| Mike Salvati       |
|                    |
| Sasha Goldshtein   |
| Righty Sock        |
| Hannah Steele      |
| Vincent Cadena     |
| Brandt Sponseller  |
| Victor Woeltjen    |
| Krug Stillo        |

## 7. Write a SQL query to find the movies without any rating. Return movie title.

```sql
select mov_title from movie where mov_id not in(select distinct mov_id from movie_rating);
```

| mov_title                |
|--------------------------|
| The Deer Hunter          |
| Amadeus                  |
| Eyes Wide Shut           |
| The Shawshank Redemption |
| Deliverance              |
| The Prestige             |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

## 8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.

```sql
select mov_title from movie where mov_id in (905,907,917);
```

Empty set

## 9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.

```sql
select mov_id , mov_title , mov_year from movie where mov_title like '%Boogie Nights%' order by mov_year asc;
```

| mov_id | mov_title     | mov_year |
|--------|---------------|----------|
| 10     | Boogie Nights | 1997     |

## 10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.

```sql
select act_id from actor where act_fname='Woody' and act_lname='Allen';
```

| act_id |
|--------|
| 11     |

## 11. Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.

```sql
select * from actor where act_id in (select act_id from movie_cast where mov_id in (select mov_id from movie where mov_title='Annie Hall'));
```

| act_id | act_fname | act_lname | act_gender |
|--------|-----------|-----------|------------|
| 11     | Woody     | Allen     | M          |

## 12. Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.

```sql
select dir_fname , dir_lname from director where dir_id in (select dir_id from movie_direction where mov_id in (select mov_id from movie where mov_title='Eyes Wide Shut'));
```

| dir_fname | dir_lname |
|-----------|-----------|
| Stanley   | Kubrick   |

## 13. Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.

```sql
select mov_title , mov_year , mov_time , mov_dt_rel , mov_rel_country from movie where mov_rel_country!='UK';
```

| mov_title     | mov_year | mov_time | mov_dt_rel | mov_rel_country |
|---------------|----------|----------|------------|-----------------|
| The Innocents | 1961     | 100      | 1962-02-19 | SW              |
| Annie Hall    | 1977     | 93       | 1977-04-20 | USA             |
| Seven Samurai | 1954     | 207      | 1954-04-26 | JP              |

## 14. Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.

```sql
SELECT m.mov_title, m.mov_year, m.mov_dt_rel, d.dir_fname, d.dir_lname, a.act_fname, a.act_lname FROM movie m, director d, actor a, movie_direction md, movie_cast mc WHERE m.mov_id IN (SELECT mr.mov_id FROM movie_rating mr WHERE mr.rev_id IN (SELECT rev_id FROM movie_reviewer WHERE rev_name = '')) AND m.mov_id = md.mov_id AND md.dir_id = d.dir_id AND m.mov_id = mc.mov_id AND mc.act_id = a.act_id;
```

| mov_title         | mov_year | mov_dt_rel | dir_fname | dir_lname | act_fname | act_lname |
|-------------------|----------|------------|-----------|-----------|-----------|-----------|
| Blade Runner      | 1982     | 1982-09-09 | Ridley    | Scott     | Harrison  | Ford      |
| Princess Mononoke | 1997     | 2001-10-19 | Hayao     | Miyazaki  | Claire    | Danes     |

## 15. Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.

```sql
select mov_title from movie where mov_id in (select mov_id from movie_direction where dir_id in (select dir_id from director where dir_fname='Woddy' and dir_lname='Allen'));
```

Empty set (0.00 sec)

## 16. Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.

```sql
SELECT DISTINCT mov_year FROM movie m WHERE EXISTS (SELECT 1 FROM movie_rating r WHERE r.mov_id = m.mov_id AND r.rev_stars >= 3)ORDER BY mov_year;
```

| mov_year |
|----------|
| 1954     |
| 1958     |
| 1961     |
| 1962     |
| 1977     |
| 1982     |
| 1986     |
| 1995     |
| 1997     |
| 1999     |
| 2001     |
| 2004     |
| 2008     |
| 2009     |

## 17. Write a SQL query to search for movies that do not have any ratings. Return movie title.

```sql
select mov_title from movie where mov_id not in(select distinct mov_id from movie_rating);
```

| mov_title                |
|--------------------------|
| The Deer Hunter          |
| Amadeus                  |
| Eyes Wide Shut           |
| The Shawshank Redemption |
| Deliverance              |
| The Prestige             |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

## 18. Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.

```sql
SELECT rev_name FROM movie_reviewer r WHERE EXISTS (SELECT 1 FROM movie m WHERE NOT EXISTS (SELECT 1 FROM movie_rating mr WHERE mr.rev_id = r.rev_id AND mr.mov_id = m.mov_id));
```

| rev_name           |
|--------------------|
| Righty Sock        |
| Jack Malvern       |
| Flagrant Baronessa |
| Alec Shaw          |
|                    |
| Victor Woeltjen    |
| Simon Wright       |
| Neal Wruck         |
| Paul Monks         |
| Mike Salvati       |
|                    |
| Wesley S. Walker   |
| Sasha Goldshtein   |
| Josh Cates         |
| Krug Stillo        |
| Scott LeBrun       |
| Hannah Steele      |
| Vincent Cadena     |
| Brandt Sponseller  |
| Richard Adams      |

## 19. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.

```sql
select m.mov_title, mr.rev_stars, r.rev_name from movie m, movie_rating mr, movie_reviewer r where m.mov_id in (select distinct mov_id from movie_rating) and m.mov_id = mr.mov_id and mr.rev_id = r.rev_id order by m.mov_title asc, mr.rev_stars asc, r.rev_name asc;
```

| mov_title           | rev_stars | rev_name           |
|---------------------|-----------|-------------------|
| Aliens              | 8.40      | Brandt Sponseller  |
| American Beauty     | 7.00      | Sasha Goldshtein   |
| Annie Hall          | 8.10      | Mike Salvati       |
| Avatar              | 7.30      | Victor Woeltjen    |
| Beyond the Sea      | 6.70      | Richard Adams      |
| Blade Runner        | 8.20      |                    |
| Boogie Nights       | 3.00      | Paul Monks         |
| Chinatown           | NULL      | Neal Wruck         |
| Donnie Darko        | 8.10      | Hannah Steele      |
| Good Will Hunting   | 4.00      | Josh Cates         |
| Lawrence of Arabia  | 8.30      | Flagrant Baronessa |
| Princess Mononoke   | 8.40      |                    |
| Seven Samurai       | 7.70      | Krug Stillo        |
| Slumdog Millionaire | 8.00      | Vincent Cadena     |
| The Innocents       | 7.90      | Jack Malvern       |
| The Usual Suspects  | 8.60      | Simon Wright       |
| Titanic             | 7.70      | Righty Sock        |
| Trainspotting       | NULL      | Scott LeBrun       |
| Vertigo             | 8.40      | Righty Sock        |

## 20. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer's name, movie title. Return reviewer's name, movie title.

```sql
select m.mov_title, mr.rev_stars, r.rev_name from movie m, movie_rating mr, movie_reviewer r where m.mov_id in (select distinct mov_id from movie_rating) and m.mov_id = mr.mov_id and mr.rev_id = r.rev_id group by m.mov_title,mr.rev_stars,r.rev_name;
```

| mov_title           | rev_stars | rev_name           |
|---------------------|-----------|-------------------|
| Vertigo             | 8.40      | Righty Sock        |
| The Innocents       | 7.90      | Jack Malvern       |
| Lawrence of Arabia  | 8.30      | Flagrant Baronessa |
| Blade Runner        | 8.20      |                    |
| The Usual Suspects  | 8.60      | Simon Wright       |
| Chinatown           | NULL      | Neal Wruck         |
| Boogie Nights       | 3.00      | Paul Monks         |
| Annie Hall          | 8.10      | Mike Salvati       |
| Princess Mononoke   | 8.40      |                    |
| American Beauty     | 7.00      | Sasha Goldshtein   |
| Titanic             | 7.70      | Righty Sock        |
| Good Will Hunting   | 4.00      | Josh Cates         |
| Trainspotting       | NULL      | Scott LeBrun       |
| Donnie Darko        | 8.10      | Hannah Steele      |
| Slumdog Millionaire | 8.00      | Vincent Cadena     |
| Aliens              | 8.40      | Brandt Sponseller  |
| Beyond the Sea      | 6.70      | Richard Adams      |
| Avatar              | 7.30      | Victor Woeltjen    |
| Seven Samurai       | 7.70      | Krug Stillo        |

## 21. Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.

```sql
SELECT m.mov_title, MAX(mr.rev_stars) AS max_stars FROM movie m, movie_rating mr WHERE m.mov_id = mr.mov_id GROUP BY m.mov_title HAVING MAX(mr.rev_stars) = (SELECT MAX(rev_stars) FROM movie_rating) ORDER BY m.mov_title ASC;
```

| mov_title          | max_stars |
|--------------------|-----------|
| The Usual Suspects | 8.60      |

## 22. Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.

```sql
select rev_name from movie_reviewer where rev_id in (select rev_id from movie_rating where mov_id in (select mov_id from movie where mov_title='American Beauty'));
```

| rev_name         |
|------------------|
| Sasha Goldshtein |

## 23. Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.

```sql
select mov_title from movie where mov_id in (select mov_id from movie_rating where rev_id = (select rev_id from movie_reviewer where rev_name = 'Paul Monks')) and mov_id not in (select mov_id from movie_rating where rev_id in (select rev_id from movie_reviewer where rev_name != 'Paul Monks'));
```

| mov_title     |
|---------------|
| Boogie Nights |

## 24. Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.

```sql
SELECT m.mov_title, MIN(mr.rev_stars) AS min_stars FROM movie m, movie_rating mr WHERE m.mov_id = mr.mov_id GROUP BY m.mov_title HAVING MIN(mr.rev_stars) = (SELECT MIN(rev_stars) FROM movie_rating) ORDER BY m.mov_title ASC;
```

| mov_title     | min_stars |
|---------------|-----------|
| Boogie Nights | 3.00      |

## 25. Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.

```sql
select mov_title from movie where mov_id in (select mov_id from movie_direction where dir_id in (select dir_id from director where dir_fname='James' and dir_lname='Cameron'));
```

| mov_title |
|-----------|
| Titanic   |
| Aliens    |

## 26. Write a query in SQL to find the movies in which one or more actors appeared in more than one film.

```sql
select distinct m.mov_title from movie m join movie_cast mc on mc.mov_id = m.mov_id where mc.act_id in ( select act_id from movie_cast group by act_id having count(distinct mov_id) > 1 );
```

| mov_title       |
|-----------------|
| American Beauty |
| Beyond the Sea  |

## 27. Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.

```sql
select rev_name from movie_reviewer r join movie_rating mr on r.rev_id=mr.rev_id where mr.rev_stars is null;
```

| rev_name     |
|--------------|
| Neal Wruck   |
| Scott LeBrun |

## 28. Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.

```sql
select a.act_fname , a.act_lname , c.role from actor a join movie_cast c on c.act_id=a.act_id join movie m on m.mov_id=c.mov_id where m.mov_title='Annie Hall';
```

| act_fname | act_lname | role        |
|-----------|-----------|-------------|
| Woody     | Allen     | Alvy Singer |

## 29. Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.

```sql
select d.dir_fname , d.dir_lname , m.mov_title from director d join movie_direction md on md.dir_id=d.dir_id join movie m on m.mov_id=md.mov_id where m.mov_title='Eyes Wide Shut';
```

| dir_fname | dir_lname | mov_title      |
|-----------|-----------|----------------|
| Stanley   | Kubrick   | Eyes Wide Shut |

## 30. Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.

```sql
select d.dir_fname , d.dir_lname , m.mov_title from director d join movie_direction md on md.dir_id=d.dir_id join movie m on m.mov_id=md.mov_id join movie_cast mc on mc.mov_id=m.mov_id where mc.role='Sean Maguire';
```

| dir_fname | dir_lname | mov_title         |
|-----------|-----------|-------------------|
| Gus       | Van Sant  | Good Will Hunting |

## 31. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.

```sql
select a.act_fname, a.act_lname, m.mov_title, m.mov_year from actor a join movie_cast mc on mc.act_id = a.act_id join movie m on m.mov_id = mc.mov_id where not exists (select 1 from movie_cast mc2 join movie m2 on m2.mov_id = mc2.mov_id where mc2.act_id = a.act_id and m2.mov_year between 1990 and 2000);
```

| act_fname | act_lname  | mov_title           | mov_year |
|-----------|------------|---------------------|----------|
| James     | Stewart    | Vertigo             | 1958     |
| Deborah   | Kerr       | The Innocents       | 1961     |
| Peter     | OToole     | Lawrence of Arabia  | 1962     |
| Robert    | De Niro    | The Deer Hunter     | 1978     |
| F. Murray | Abraham    | Amadeus             | 1984     |
| Harrison  | Ford       | Blade Runner        | 1982     |
| Jack      | Nicholson  | Chinatown           | 1974     |
| Woody     | Allen      | Annie Hall          | 1977     |
| Jon       | Voight     | Deliverance         | 1972     |
| Christian | Bale       | Chinatown           | 1974     |
| Maggie    | Gyllenhaal | Donnie Darko        | 2001     |
| Dev       | Patel      | Slumdog Millionaire | 2008     |
| Sigourney | Weaver     | Aliens              | 1986     |

## 32. Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.

```sql
select d.dir_fname, d.dir_lname, count(distinct g.gen_id) as genre_count from director d join movie_direction md on md.dir_id = d.dir_id join movie_genres mg on mg.mov_id = md.mov_id join genres g on g.gen_id = mg.gen_id group by d.dir_fname, d.dir_lname having count(distinct g.gen_id) > 1 order by d.dir_fname asc, d.dir_lname asc;
```

Empty set (0.01 sec)

## 33. Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.

```sql
select m.mov_title , m.mov_year , g.gen_title from movie m join movie_genres mg on mg.mov_id=m.mov_id join genres g on g.gen_id=mg.gen_id;
```

| mov_title                | mov_year | gen_title |
|--------------------------|----------|-----------|
| Vertigo                  | 1958     | Mystery   |
| The Innocents            | 1961     | Horror    |
| Lawrence of Arabia       | 1962     | Adventure |
| The Deer Hunter          | 1978     | War       |
| Blade Runner             | 1982     | Thriller  |
| Eyes Wide Shut           | 1999     | Mystery   |
| The Usual Suspects       | 1995     | Crime     |
| Annie Hall               | 1977     | Comedy    |
| Princess Mononoke        | 1997     | Animation |
| The Shawshank Redemption | 1994     | Crime     |
| American Beauty          | 1999     | Romance   |
| Deliverance              | 1972     | Adventure |
| Trainspotting            | 1996     | Drama     |
| Slumdog Millionaire      | 2008     | Drama     |
| Aliens                   | 1986     | Action    |
| Beyond the Sea           | 2004     | Music     |
| Spirited Away            | 2001     | Drama     |
| Back to the Future       | 1985     | Mystery   |
| Braveheart               | 1995     | Drama     |

## 34. Write a SQL query to find all the movies with year, genres, and name of the director.

```sql
select d.dir_fname , d.dir_lname , m.mov_year , g.gen_title from movie m join movie_genres mg on mg.mov_id=m.mov_id join genres g on g.gen_id=mg.gen_id join movie_direction md on md.mov_id=m.mov_id join director d on d.dir_id=md.dir_id;
```

| dir_fname | dir_lname       | mov_year | gen_title |
|-----------|-----------------|----------|-----------|
| Alfred    | Hitchcock       | 1958     | Mystery   |
| Jack      | Clayton         | 1961     | Horror    |
| David     | Lean            | 1962     | Adventure |
| Michael   | Cimino          | 1978     | War       |
| Ridley    | Scott           | 1982     | Thriller  |
| Stanley   | Kubrick         | 1999     | Mystery   |
| Bryan     | Singer          | 1995     | Crime     |
| Woody     | Allen           | 1977     | Comedy    |
| Hayao     | Miyazaki        | 1997     | Animation |
| Frank     | Darabont        | 1994     | Crime     |
| Sam       | Mendes          | 1999     | Romance   |
| James     | Cameron         | 1986     | Action    |
| John      | Boorman         | 1972     | Adventure |
| Danny     | Boyle           | 1996     | Drama     |
| Danny     | Boyle           | 2008     | Drama     |
| Kevin     | Spacey          | 2004     | Music     |

## 35. Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.

```sql
select m.mov_title , m.mov_year , m.mov_dt_rel , m.mov_time , d.dir_fname , d.dir_lname from movie m join movie_direction md on md.mov_id=m.mov_id join director d on d.dir_id=md.dir_id where m.mov_dt_rel < '1989-01-01';
```

| mov_title          | mov_year | mov_dt_rel | mov_time | dir_fname | dir_lname |
|--------------------|----------|------------|----------|-----------|-----------|
| Vertigo            | 1958     | 1958-08-24 | 128      | Alfred    | Hitchcock |
| The Innocents      | 1961     | 1962-02-19 | 100      | Jack      | Clayton   |
| Lawrence of Arabia | 1962     | 1962-12-11 | 216      | David     | Lean      |
| The Deer Hunter    | 1978     | 1979-03-08 | 183      | Michael   | Cimino    |
| Amadeus            | 1984     | 1985-01-07 | 160      | Milos     | Forman    |
| Blade Runner       | 1982     | 1982-09-09 | 117      | Ridley    | Scott     |
| Chinatown          | 1974     | 1974-08-09 | 130      | Roman     | Polanski  |
| Annie Hall         | 1977     | 1977-04-20 | 93       | Woody     | Allen     |
| Aliens             | 1986     | 1986-08-29 | 137      | James     | Cameron   |
| Deliverance        | 1972     | 1982-10-05 | 109      | John      | Boorman   |

## 36. Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.

```sql
select g.gen_title , AVG(m.mov_time) , count(g.gen_id) from genres g join movie_genres mg on mg.gen_id=g.gen_id join movie m on m.mov_id=mg.mov_id group by g.gen_id;
```

| gen_title | AVG(m.mov_time) | count(g.gen_id) |
|-----------|-----------------|-----------------|
| Mystery   | 134.3333        | 3               |
| Horror    | 100.0000        | 1               |
| Adventure | 162.5000        | 2               |
| War       | 183.0000        | 1               |
| Thriller  | 117.0000        | 1               |
| Crime     | 124.0000        | 2               |
| Comedy    | 93.0000         | 1               |
| Animation | 134.0000        | 1               |
| Romance   | 122.0000        | 1               |
| Drama     | 129.2500        | 4               |
| Action    | 137.0000        | 1               |
| Music     | 118.0000        | 1               |

## 37. Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.

```sql
select m.mov_title , m.mov_year , d.dir_fname , d.dir_lname , a.act_fname , a.act_lname , ac.role from movie m join movie_direction md on md.mov_id=m.mov_id join director d on d.dir_id=md.dir_id join movie_cast ac on ac.mov_id=m.mov_id join actor a on a.act_id=ac.act_id where m.mov_time = (select min(mov_time) from movie);
```

| mov_title  | mov_year | dir_fname | dir_lname | act_fname | act_lname | role        |
|------------|----------|-----------|-----------|-----------|-----------|-------------|
| Annie Hall | 1977     | Woody     | Allen     | Woody     | Allen     | Alvy Singer |

## 38. Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.

```sql
select m.mov_year from movie m join movie_rating mr on mr.mov_id=m.mov_id where mr.rev_stars=3 or mr.rev_stars=4 order by m.mov_year asc;
```

| mov_year |
|----------|
| 1997     |
| 1997     |

## 39. Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.

```sql
select r.rev_name , m.mov_title , mr.rev_stars from movie m join movie_rating mr on mr.mov_id=m.mov_id join movie_reviewer r on r.rev_id=mr.rev_id;
```

| rev_name           | mov_title           | rev_stars |
|--------------------|---------------------|-----------|
| Righty Sock        | Vertigo             | 8.40      |
| Jack Malvern       | The Innocents       | 7.90      |
| Flagrant Baronessa | Lawrence of Arabia  | 8.30      |
|                    | Blade Runner        | 8.20      |
| Simon Wright       | The Usual Suspects  | 8.60      |
| Neal Wruck         | Chinatown           | NULL      |
| Paul Monks         | Boogie Nights       | 3.00      |
| Mike Salvati       | Annie Hall          | 8.10      |
|                    | Princess Mononoke   | 8.40      |
| Sasha Goldshtein   | American Beauty     | 7.00      |
| Righty Sock        | Titanic             | 7.70      |
| Josh Cates         | Good Will Hunting   | 4.00      |
| Scott LeBrun       | Trainspotting       | NULL      |
| Hannah Steele      | Donnie Darko        | 8.10      |
| Vincent Cadena     | Slumdog Millionaire | 8.00      |
| Brandt Sponseller  | Aliens              | 8.40      |
| Richard Adams      | Beyond the Sea      | 6.70      |
| Victor Woeltjen    | Avatar              | 7.30      |
| Krug Stillo        | Seven Samurai       | 7.70      |

## 40. Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.

```sql
select m.mov_title , max(mr.rev_stars) from movie m join movie_rating mr on mr.mov_id=m.mov_id group by m.mov_title having max(mr.rev_stars)=(select max(rev_stars) from movie_rating) order by m.mov_title asc;
```

| mov_title          | max(mr.rev_stars) |
|--------------------|-------------------|
| The Usual Suspects | 8.60              |

## 41. Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.

```sql
select m.mov_title , d.dir_fname , d.dir_lname , mr.rev_stars from movie m join movie_direction md on md.mov_id=m.mov_id join director d on md.dir_id=d.dir_id join movie_rating mr on m.mov_id=mr.mov_id;
```

| mov_title           | dir_fname | dir_lname       | rev_stars |
|---------------------|-----------|-----------------|-----------|
| Vertigo             | Alfred    | Hitchcock       | 8.40      |
| The Innocents       | Jack      | Clayton         | 7.90      |
| Lawrence of Arabia  | David     | Lean            | 8.30      |
| Blade Runner        | Ridley    | Scott           | 8.20      |
| The Usual Suspects  | Bryan     | Singer          | 8.60      |
| Chinatown           | Roman     | Polanski        | NULL      |
| Boogie Nights       | Paul      | Thomas Anderson | 3.00      |
| Annie Hall          | Woody     | Allen           | 8.10      |
| Princess Mononoke   | Hayao     | Miyazaki        | 8.40      |
| American Beauty     | Sam       | Mendes          | 7.00      |
| Titanic             | James     | Cameron         | 7.70      |
| Aliens              | James     | Cameron         | 8.40      |
| Good Will Hunting   | Gus       | Van Sant        | 4.00      |
| Trainspotting       | Danny     | Boyle           | NULL      |
| Slumdog Millionaire | Danny     | Boyle           | 8.00      |
| Donnie Darko        | Richard   | Kelly           | 8.10      |
| Beyond the Sea      | Kevin     | Spacey          | 6.70      |

## 42. Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.

```sql
select m.mov_title, a.act_fname, a.act_lname, mc.role from movie m join movie_cast mc on mc.mov_id = m.mov_id join actor a on a.act_id = mc.act_id where mc.act_id in (select act_id from movie_cast group by act_id having count(distinct mov_id) > 1);
```

| mov_title       | act_fname | act_lname | role           |
|-----------------|-----------|-----------|----------------|
| American Beauty | Kevin     | Spacey    | Lester Burnham |
| Beyond the Sea  | Kevin     | Spacey    | Bobby Darin    |

## 43. Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.

```sql
select d.dir_fname , d.dir_lname , m.mov_title , a.act_fname , a.act_lname , mc.role from movie m join movie_direction md on md.mov_id=m.mov_id join director d on d.dir_id=md.dir_id join movie_cast mc on m.mov_id=mc.mov_id join actor a on a.act_id=mc.act_id where a.act_fname='Claire' and a.act_lname='Danes';
```

| dir_fname | dir_lname | mov_title         | act_fname | act_lname | role |
|-----------|-----------|-------------------|-----------|-----------|------|
| Hayao     | Miyazaki  | Princess Mononoke | Claire    | Danes     | San  |

## 44. Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.

```sql
select a.act_fname , a.act_lname , m.mov_title , mc.role from actor a join movie_cast mc on a.act_id=mc.act_id join movie m on m.mov_id=mc.mov_id join movie_direction md on md.mov_id=m.mov_id join director d on d.dir_id=md.dir_id where a.act_fname=d.dir_fname and a.act_lname=d.dir_lname;
```

| act_fname | act_lname | mov_title      | role        |
|-----------|-----------|----------------|-------------|
| Woody     | Allen     | Annie Hall     | Alvy Singer |
| Kevin     | Spacey    | Beyond the Sea | Bobby Darin |

## 45. Write a SQL query to find the cast list of the movie 'Chinatown'. Return first name, last name.

```sql
select a.act_fname, a.act_lname from actor a join movie_cast mc on mc.act_id=a.act_id join movie m on m.mov_id=mc.mov_id where m.mov_title='Chinatown';
```

| act_fname | act_lname |
|-----------|-----------|
| Jack      | Nicholson |
| Christian | Bale      |

## 46. Write a SQL query to find those movies where actor's first name is 'Harrison' and last name is 'Ford'. Return movie title.

```sql
select m.mov_title from actor a join movie_cast mc on mc.act_id=a.act_id join movie m on m.mov_id=mc.mov_id where a.act_fname='Harrison' and a.act_lname='Ford';
```

| mov_title    |
|--------------|
| Blade Runner |

## 47. Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.

```sql
select m.mov_title , m.mov_year , m.mov_rel_country , mr.rev_stars from movie m join movie_rating mr on mr.mov_id=m.mov_id where mr.rev_stars = (select max(rev_stars) from movie_rating);
```

| mov_title          | mov_year | mov_rel_country | rev_stars |
|--------------------|----------|-----------------|-----------|
| The Usual Suspects | 1995     | UK              | 8.60      |

## 48. Write a SQL query to find the highest-rated 'Mystery Movies'. Return the title, year, and rating.

```sql
select m.mov_title , m.mov_year , m.mov_rel_country , mr.rev_stars from movie m join movie_rating mr on mr.mov_id=m.mov_id join movie_genres mg on mg.mov_id=m.mov_id join genres g on g.gen_id=mg.gen_id where g.gen_title='Mystery' and mr.rev_stars=(select max(mr2.rev_stars) from movie_rating mr2 join movie_genres mg2 on mg2.mov_id = mr2.mov_id join genres g2 on g2.gen_id = mg2.gen_id where g2.gen_title = 'Mystery');
```

| mov_title | mov_year | mov_rel_country | rev_stars |
|-----------|----------|-----------------|-----------|
| Vertigo   | 1958     | UK              | 8.40      |

## 49. Write a SQL query to find the years when most of the 'Mystery Movies' produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.

```sql
select m.mov_year, g.gen_title, count(distinct m.mov_id) as movie_count, avg(mr.rev_stars) as avg_rating from movie m join movie_genres mg on mg.mov_id = m.mov_id join genres g on g.gen_id = mg.gen_id join movie_rating mr on mr.mov_id = m.mov_id where g.gen_title = 'Mystery' group by m.mov_year, g.gen_title order by m.mov_year asc;
```

| mov_year | gen_title | movie_count | avg_rating |
|----------|-----------|-------------|------------|
| 1958     | Mystery   | 1           | 8.400000   |

## 50. Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.

```sql
select m.mov_title , a.act_fname , a.act_lname , m.mov_year , mc.role , g.gen_title , d.dir_fname , d.dir_lname , m.mov_dt_rel , mr.rev_stars from movie m join movie_cast mc on mc.mov_id=m.mov_id join actor a on a.act_id=mc.act_id join movie_direction md on md.mov_id=m.mov_id join director d on d.dir_id=md.dir_id join movie_rating mr on mr.mov_id=m.mov_id join movie_genres mg on mg.mov_id=m.mov_id join genres g on g.gen_id=mg.gen_id where a.act_gender='F';
```

| mov_title         | act_fname | act_lname | mov_year | role         | gen_title | dir_fname | dir_lname | mov_dt_rel | rev_stars |
|-------------------|-----------|-----------|----------|--------------|-----------|-----------|-----------|------------|-----------|
| The Innocents     | Deborah   | Kerr      | 1961     | Miss Giddens | Horror    | Jack      | Clayton   | 1962-02-19 | 7.90      |
| Princess Mononoke | Claire    | Danes     | 1997     | San          | Animation | Hayao     | Miyazaki  | 2001-10-19 | 8.40      |
| Aliens            | Sigourney | Weaver    | 1986     | Ripley       | Action    | James     | Cameron   | 1986-08-29 | 8.40      |