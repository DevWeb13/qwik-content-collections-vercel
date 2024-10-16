import type { JSXChildren, JSXNode, Signal } from '@builder.io/qwik';
import { component$, useStore } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { allPosts } from 'content-collections';

export default component$(() => {
  const allPostsStore = useStore({
    allPosts,
  });
  console.log(allPostsStore);
  return (
    <main>
      <ul>
        {allPostsStore.allPosts.map(
          (post: {
            _meta: { path: string | number | null | undefined };
            title:
              | string
              | number
              | boolean
              | Function
              | RegExp
              | JSXChildren[]
              | Promise<JSXChildren>
              | Signal<JSXChildren>
              | JSXNode<unknown>
              | null
              | undefined;
            summary:
              | string
              | number
              | boolean
              | Function
              | RegExp
              | JSXChildren[]
              | Promise<JSXChildren>
              | Signal<JSXChildren>
              | JSXNode<unknown>
              | null
              | undefined;
            html?: string;
          }) => (
            <>
              <li key={post._meta.path}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </li>
              {post.html && <div dangerouslySetInnerHTML={post.html} />}
            </>
          )
        )}
      </ul>
      {/* <input
        type='text'
        placeholder='Search posts'
        onInput$={(e) => {
          const search = (e.target as HTMLInputElement).value;
          // allPostsStore.allPosts = filterSearchPosts(search);
        }}
      /> */}

      <Link href='/about'>About</Link>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
