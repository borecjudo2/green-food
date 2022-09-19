create table users (
id uuid not null,
is_account_non_expired boolean not null,
is_account_non_locked boolean not null,
is_credentials_non_expired boolean not null,
is_enabled boolean not null,
password varchar(255) not null ,
username varchar(255) not null ,
primary key (id));

create table reviews (
id uuid not null,
review varchar(255) not null,
review_date timestamp not null,
user_id uuid not null,
primary key (id));

create table dishes (
id uuid not null,
icon_url varchar(255) not null,
dish_type varchar(255) not null,
description varchar(255) not null,
name varchar(255) not null,
price float8 not null,
primary key (id));

create table orders (
id uuid not null,
address varchar(255) not null,
order_date timestamp not null,
price float8 not null,
user_id uuid not null,
primary key (id));

create table order_dish (
order_id uuid not null,
dish_id uuid not null,
primary key (order_id, dish_id));

alter table if exists users add constraint UK_r43af9ap4edm43mmtq01oddj6 unique (username);
alter table if exists dishes add constraint UK_r12af9ap4edm43mmtq45oddj9 unique (name);
alter table if exists dishes add constraint UK_r12af9ap4edm43mmtq45oddj1 unique (icon_url);
alter table if exists order_dish add constraint FKsxcogiw9xscinh77ixpor5apo foreign key (dish_id) references dishes;
alter table if exists order_dish add constraint FK1fevhe8ke4l3uebaotqn5ae77 foreign key (order_id) references orders;
alter table if exists orders add constraint FK32ql8ubntj5uh44ph9659tiih foreign key (user_id) references users;
alter table if exists reviews add constraint FKcgy7qjc1r99dp117y9en6lxye foreign key (user_id) references users;
