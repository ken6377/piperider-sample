with

no1 as (

  select
    {{ dbt_utils.star(source('mlb', 'schedules')) }}

  from
    {{ source('mlb', 'schedules') }}

),

no2 as (

select
  {%- set select_columns = "
  gameId,
  startTime,
  homeTeamName,
  awayTeamName,
  status,
  dayNight
  "-%}

  {{select_columns}}

from
  no1

)

select
  {{ star_cte(select_columns, 'no2') }}

from
  no2