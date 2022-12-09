select "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name",
       count("p"."amount") as "Total Amount"
  from "customers" as "c"
  join "payments" as "p" using("customerId")
  group by "c"."firstName", "c"."lastName"
  order by "Total Amount" desc;
