export default function slugify(string) {
  let lowerCaseString = string.toLowerCase();
  let slug = lowerCaseString.split(/[\s]+/).join("-");
  return slug;
}
