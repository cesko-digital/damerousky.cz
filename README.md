# README

Tento repozitář prozatím není nasazen a web [damerousky.cz](damerousky.cz) běží na hostované platformě [https://mapotic.com](https://mapotic.com). Pokud se s námi chcete spojit napište nám na damerousky@gmail.com.

## English
This repo is not deployed at the moment. [damerousky.cz](damerousky.cz) currently runs directly on the [https://mapotic.com](https://mapotic.com) platform. In case you want to deploy a clone, please contact us at damerousky@gmail.com and we will facilitate help.



# Statický web www.damerousky.cz

## Editace statického obsahu
Statický obsah (stránky pod odkazem *Informace*) je psaný v [Markdownu](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
 a je v adresáři `/content/pages`.

## Editace přímo na GitHubu 
Stránky můžete editovat přímo ve webovém prohlížeči na GitHubu. Otevřete si příslušný soubor a pomocí tužky v toolbaru se přepnete do
režimu editace. Pomocí **Preview changes** se můžete podívat, jak přibližně bude obsah vypadat – ale zobrazuje se to v rámci GitHubu, takže
nebudou fungovat např. vložené obrázky.

### Náhled na dočasné adrese před publikováním
Změny připravíte k publikování pomocí **Commit changes**. Vyplňte prosím alespoň první řádek
s popisem změn (ten s placeholderem *Update <jméno souboru>*). Dole zvolte variantu **Create a new branch for this commit and start a pull request.**
Tím se změny nepropíšou hned na ostrý web, ale místo toho se vytvoří dočasná adresa (viz níže), na které je možné změny zkontrolovat. Teprve pak někdo
s právem merge propíše změny do hlavního repository a tím se publíkují na web.

### Okamžité publikování
Pokud u **Commit changes** ponecháte výchozí volbu **Commit directly to the master branch**, změny se okamžitě propagují na ostrý web.
Publikování trvá cca 30 sekund. Že byla změna publikována lze ověřit v [seznamu změn](https://github.com/cesko-digital/damerousky.cz/commits/master).
Poslední změna je úplně nahoře a kliknutím na její popis se dostanete na stránku s detailem změny. Pokud už proběhlo publikování, bude tam zpráva
od robota **now**, která vypadá takhle nějak:
> now [bot] replied 1 minute ago
>
> Successfully deployed to following URLs:
>
> * https://damerouskycz-60idy71ig.now.sh
> * https://damerouskycz.ceskodigital.now.sh
> * https://damerouskycz-git-master.ceskodigital.now.sh

Pokud by tam byla od robota **now** chybová zpráva, je problém s publikováním webu, dejte vědět na Slacku v kanálu `#p-damerousky`.

## Použití Gitu a editoru (např. Visual Studio Code)
Předpokládá se, že máte základní zkušenosti s Gitem a GitHubem a že máte účet na GitHubu. Repository se zdroji webu je zde: [GitHub.com/cesko-digital/damerousky.cz](https://github.com/cesko-digital/damerousky.cz).
Změny se do repository promítají pomocí **pul requestů** – buď z branche (viz [Creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)),
pokud máte právo zápisu do hlavního repository, nebo z vašeho forku (viz [Creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)),
pokud právo zápisu do hlavního repository nemáte. 


## Náhled upravené verze
Dočasná adresa s náhledem nové verze webu se objeví v komentáři ke commitu od robota **now**. Seznam otevřených pull requestů je zde: [Pull requests](https://github.com/cesko-digital/damerousky.cz/pulls).
Komentář od robota bude vypadat takhle nějak:
> now [bot] replied 1 minute ago
>
> Successfully deployed to following URLs:
>
> * https://damerouskycz-60idy71ig.now.sh
> * https://damerouskycz.ceskodigital.now.sh
> * https://damerouskycz-git-master.ceskodigital.now.sh

První adresa (s kódem skládajícím se z číslic a písmen) je dočasná adresa webu, na které je možné novou verzi otestovat. 

## Pro vývojáře
Web používá generátor statických webů [Gridsome](https://gridsome.org/) založený na [Vue](https://vuejs.org). Pro provoz webu
se používá [Zeit](https://zeit.co/).
 
1. Je potřeba mít nainstalováno [Node.js](https://nodejs.org/).
1. Nainstalovat [Gridsome](https://gridsome.org/docs/#how-to-install)
1. Naklonovat rpository z GitHubu `git clone git@github.com:cesko-digital/damerousky.cz.git`
1. Přejít do adresáře se zdrojáky webu `cd damerousky.cz`
1. Spustit lokální server `gridsome develop`. Lokální web poběží na `http://localhost:8080`
1. Happy coding 🎉🙌
