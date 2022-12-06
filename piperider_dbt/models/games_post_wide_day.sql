{{ config(materialized='table') }}

with

games_post_wide as (

  select
    {{ dbt_utils.star(source('mlb', 'games_post_wide')) }}

  from
    {{ source('mlb', 'games_post_wide') }}

)

select
  {{ dbt_utils.star(source('mlb', 'games_post_wide')) }}

from
  games_post_wide

where
  dayNight = "D"