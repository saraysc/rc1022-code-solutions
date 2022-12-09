select "g"."name" as "Genre Name",
       count("g"."name") as "Movies per Genre"
  from "genres" as "g"
  join "filmGenre" as "f" using ("genreId")
  join "castMembers" as "c" using ("filmId")
  join "actors" as "a" using("actorId")
 where "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
group by "g"."name";
