import { Pool } from 'pg'
export const pool=new Pool({
    host:'ec2-52-23-45-36.compute-1.amazonaws.com',
    user:'cputlbmwqoyjnz',
    password:'93538d7e91fe664c4aeec3ad893580ec4aa5acc8b4b8fc0cabd533bf8239ddfc',
    database:'ddttie2qj89527',
    port:5432,
    ssl:{rejectUnauthorized:false}
});