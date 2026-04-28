@echo off

set SERVER=admin@drkoshakov.ru
set REMOTE_PATH=/home/admin/shard-cms

echo Copying Next.js build...

scp -r ^
.next ^
public ^
package.json ^
%SERVER%:%REMOTE_PATH%

echo Done!
pause