@echo off

set SERVER=deploy@193.160.208.49
set REMOTE_PATH=/home/deploy/shard-cms

echo Copying Next.js build...

scp -r ^
.next ^
public ^
package.json ^
%SERVER%:%REMOTE_PATH%

echo Done!
pause