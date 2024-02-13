# I. Introduction
## 1. Quelles sont les verbes HTTP les plus populaires ? 
## 1. Quelles actions CRUD peut-on leur associer ?
GET - READ
POST - CREATE
PUT / PATCH - UPDATE
DELETE - DELETE

## 2. Quelles sont les différences entre URL, URI et URN ?
--

## 3. Quelle est la structure d'une requête émise ? D'une requête reçue ?
HTTP request:
GET /hello.htm HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.tutorialspoint.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive

HTTP Response:
HTTP/1.1 400 Bad Request
Date: Sun, 18 Oct 2012 10:36:20 GMT
Server: Apache/2.2.14 (Win32)
Content-Length: 230
Content-Type: text/html; charset=iso-8859-1
Connection: Closed

## 4. Comment sont passés les paramètres ?
Par l'url ou par le "body"


# II. Exemple d'utilisation d'une API

Pour la requête GET https://reqres.in/api/users
## 1. 
Statut 200 - OK

## 2. 
Au format JSON

## 3.
À l'aide d'objets imbriqués (JSON)

## --
Les paramètres d'url sont passés à la suite du caractère "?"

## Infos. utilisateur
## Comment est passé le paramètre relatif à l'utilisateur ?
Le paramètre de l'id de l'utilisateur est précédé d'un slash

## Utiliser à présent la même requête en mettant un id qui n'existe pas
## Que se passe-t-il dans la réponse ? Quel est le code d'erreur ?
Dans la réponse, nous avons un JSON vide
Le code d'erreur est 404 Not found

## Création d'un utilisateur
https://reqres.in/api/users?name=Steve&job=Director
Le code est 201 Created

# III. Mise en pratique
