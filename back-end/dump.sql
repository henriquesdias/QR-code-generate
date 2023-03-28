--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: informations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.informations (
    id integer NOT NULL,
    name text NOT NULL,
    linkedin_url text NOT NULL,
    github_url text NOT NULL
);


--
-- Name: informations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.informations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: informations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.informations_id_seq OWNED BY public.informations.id;


--
-- Name: informations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.informations ALTER COLUMN id SET DEFAULT nextval('public.informations_id_seq'::regclass);


--
-- Data for Name: informations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.informations VALUES (12, 'henrique', 'https://www.linkedin.com/in/henriquesilvadias/', 'https://github.com/henriquesdias');
INSERT INTO public.informations VALUES (13, 'aojaoja', 'ajodoajdoj', 'jdaojdoasdjoas');


--
-- Name: informations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.informations_id_seq', 13, true);


--
-- Name: informations informations_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.informations
    ADD CONSTRAINT informations_name_key UNIQUE (name);


--
-- Name: informations informations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.informations
    ADD CONSTRAINT informations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

