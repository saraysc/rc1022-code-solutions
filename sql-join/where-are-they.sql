select "a"."line1",
       "a"."district",
       "c"."name" as "cityName",
       "d"."name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "d" using ("countryId")
