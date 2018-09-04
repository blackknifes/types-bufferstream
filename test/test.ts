import bufferstreams from 'bufferstreams';

import fs from 'fs';

fs.createReadStream("./package.json").pipe(new bufferstreams((err, buf, cb)=>{
    if(err)
        console.error(err);
    if(buf)
        console.log(buf.toString());
}));