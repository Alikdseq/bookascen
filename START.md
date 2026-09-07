# ASCEN — запуск сайта внутри проекта

Скрипт создаёт/проверяет `07_PUBLICATION/web` и запускает локальный сервер.
Не трогает `00_SYSTEM`–`06_ARCHIVE`, `08_ASSETS`, `09_BACKUP` и markdown книги.

## Использование

Из корня «Моя КНИГА»:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\ASCEN_WEB_START.ps1
```

Или только установка + сборка без запуска:

```powershell
.\ASCEN_WEB_START.ps1 -BuildOnly
```
