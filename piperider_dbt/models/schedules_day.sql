{{ config(materialized='table') }}

with

schedules as (

  select
    {{ dbt_utils.star(source('mlb', 'schedules')) }}

  from
    {{ source('mlb', 'schedules') }}

)

select
  {{ dbt_utils.star(source('mlb', 'schedules')) }}

from
  schedules

where
  dayNight = "D"