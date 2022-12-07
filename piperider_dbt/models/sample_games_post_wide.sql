{{ config(materialized='table') }}

with

no1 as (

  select
    {{ dbt_utils.star(source('mlb', 'games_post_wide')) }}

  from
    {{ source('mlb', 'games_post_wide') }}

),

no2 as (

select
  -- https://discourse.getdbt.com/t/a-partial-workaround-for-dbt-utils-star-not-working-with-ctes/1369
  {%- set select_columns = "
  gameId,
  startTime,
  venueCapacity,
  dayNight,
  venueName,
  hitterLastName,
  hitterFirstName,
  homeFinalRuns
  "-%}

  {{select_columns}}

from
  no1

)

select
{{ star_cte(select_columns, 'no2') }}

from no2