import './profile.css';
const user = {
  name: 'Linus Torvalds',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALGBjZpuK9h1kbIjB9lqW8I_l3pHu4MMaDyJHXNtB12nnfVw49zF9_NXhKetdfEuuRNifnn9f298UhREE1O4TEulzijhm48jFcBOYuhA&s=10',
  imageSize: 100,
};
export default function Profile() {
  return (
    <div>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.image}
        alt={user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </div>
  );
}