export const GITHUB_CLIENT_SECRET = process.env['TCQ_GH_SECRET']!;
export const GITHUB_CLIENT_ID = process.env['TCQ_GH_ID']!;
export const SESSION_SECRET = process.env['TCQ_SESSION_SECRET']!;
export const CDB_SECRET = process.env['TCQ_CDB_SECRET']!;

if (!GITHUB_CLIENT_SECRET) {
    console.error('ERROR\tNo client secret. Set TCQ_GH_SECRET.');
    process.exit(1);
}

if (!GITHUB_CLIENT_ID) {
    console.error('ERROR\tNo client id. Set TCQ_GH_ID.');
    process.exit(1);
}

if (!SESSION_SECRET) {
    console.error('ERROR\tNo session secret. Set TCQ_SESSION_SECRET.');
    process.exit(1);
}

if (!CDB_SECRET) {
    console.error('ERROR\tNo CosmosDB secret. Set TCQ_CDB_SECRET.');
    process.exit(1);
}