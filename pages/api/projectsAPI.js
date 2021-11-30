const { OWNER_GIT_USER } = process.env;

export default async function handler(required, response){

   let githubCommitsData =  await (await fetch(`https://api.github.com/users/${OWNER_GIT_USER}/repos`)).json();
   let { details } = JSON.parse(
       await (await fetch(`https://raw.githubusercontent.com/${OWNER_GIT_USER}/${OWNER_GIT_USER}/main/Portifly.json`)).text()
    );

    details.map(({projects}) => {
        projects = projects.map(x => {
            x['last_commit'] = (githubCommitsData.find(({html_url:url}) => url === x.source)?.updated_at??'N/A');        
            return x;
        });
        return projects;
    });

    response.status(200).json(details);
}
