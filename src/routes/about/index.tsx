import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link href='/'>Home</Link>
    </main>
  );
});
