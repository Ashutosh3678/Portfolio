create table if not exists contact_messages (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);
