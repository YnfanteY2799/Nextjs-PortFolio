export default async function handler({ query }, rs) {
  let { requirement, key } = query;

  console.log(requirement);
  console.log(key);

  return new Promise((suc, rej) => {});
}
