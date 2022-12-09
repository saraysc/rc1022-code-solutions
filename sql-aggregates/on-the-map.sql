select "d"."name" as "countryName",
       count(*) as "numberCities"
  from "cities" as "c"
  join "countries" as "d" using ("countryId")
 group by "d"."name";
