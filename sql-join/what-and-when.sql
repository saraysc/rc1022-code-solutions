select "f"."releaseYear",
       "f"."title",
       "g"."name" as "Genre"
  from "films" as "f"
  join "filmGenre" as "fg" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "title" = 'Boogie Amelie'
