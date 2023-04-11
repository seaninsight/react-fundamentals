import { useState, useEffect } from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'

const slides = [
  <h1>Structuring React Components</h1>,
  <h1 className="text-4xl">
    <span className="text-6xl italic">React doesn't care</span>
    <br />
    how you structure your components
  </h1>,

  <h1>THE END</h1>,

  <h1>just kidding</h1>,

  <img className="max-w-[75%] m-auto" src="/slides/macro.jpg" />,

  <img className="max-w-[50%] m-auto" src="/slides/snowflake.jpg" />,

  <h1 className="text-6xl">MACRO</h1>,
  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Group by feature</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      common/
        Avatar.js
        Avatar.css
        APIUtils.js
        APIUtils.test.js

      feed/
        index.js
        Feed.js
        Feed.css
        FeedStory.js
        FeedStory.test.js
        FeedAPI.js

      profile/
        index.js
        Profile.js
        ProfileHeader.js
        ProfileHeader.css
        ProfileAPI.js
      "
      showLineNumbers={false}
    />
  </div>,
  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Group by type/use</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      api/
        APIUtils.js
        APIUtils.test.js
        ProfileAPI.js
        UserAPI.js
        
      components/
        Avatar.js
        Avatar.css
        Feed.js
        Feed.css
        FeedStory.js
        FeedStory.test.js
        Profile.js
        ProfileHeader.js
        ProfileHeader.css
      "
      showLineNumbers={false}
    />
  </div>,

  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Atomic Design</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      components/
        atoms/
        molecules/
        organisms/
        templates/
        pages/
      "
      showLineNumbers={false}
    />
  </div>,

  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Atomic Design</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      components/
        atoms/
          Button.css
          Button.tsx
          Input.css
          Input.tsx
          Icon.css
          Icon.tsx

        molecules/
          DownloadButton.css
          DownloadButton.tsx
          PasswordInput.css
          PasswordInput.tsx

        organisms/
          ResetPasswordForm.tsx
          FileDownloadChooser.tsx

        templates/
          ResetPassword.tsx
          Login.tsx
          
        pages/
          ResetPasswordPage.tsx
          LoginPage.tsx
      "
      showLineNumbers={false}
    />
  </div>,

  <h1>Use what seems right</h1>,
  <h1>Be consistent</h1>,
  <h1>Separate concerns</h1>,

  <h1 className="text-6xl">MICRO</h1>,

  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Container/Presentation pattern</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      # RegisterUserContainer.tsx

      export default function RegisterUserContainer() {
        import './RegisterUserComponent'

        // component state
        const [username, setUsername] = useState<string>('')
        const [password, setPassword] = useState<string>('')

        // API calls
        const onSubmit = (e) => {
          // validation then call to server
          const response = await fetch('/register-user', { ... })
          // ...
        }

        const onInput = (e, value) => {
          // input handlers
          // ...
        }

        return (
          <RegisterUserComponent
            username={username}
            password={password}
            onSubmit={onSubmit}
            onInput={onInput}
            { /* etc, etc... */}
          />
        )
      }

      # RegisterUserComponent.tsx
      import './Button'

      interface Props {
        username: string
        password: string
        onSubmit: () => void
        onInput: () => void
      }

      export default function RegisterUserComponent({
        username,
        password,
        onSubmit,
        onInput,
      }) {
        return (
          <form className=&quot;RegisterUserComponent&quot;>
            <p>username</p>
            <input onInput={onInput} value={username} />
            <p>password</p>
            <input onInput={onInput} value={password} />
            <Button onSubmit={onSubmit}>Submit</Button>
          </form>
        )
      }

      "
      showLineNumbers={false}
    />
  </div>,

  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Atomic Design -- Button atom</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text='
      components/
        atoms/
          Button.css
          Button.tsx

      /* Button.css -- I like using BEM */
      .Button {
        background-color: #cfd;
        &--active {
          background-color: #fff;
        }
      }

      # Button.tsx
      export default function Button(): JSX.Element {
        // simple example -- more soon
        return (
          <button className="Button"&gt;Imma button!&lt;/button&gt;
        )
      }
      '
      showLineNumbers={false}
    />
  </div>,
  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Atomic Design -- DownloadButton.tsx</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      # Button.tsx
      interface ButtonTypes {
        text: string
        url: string
      }

      export default function DownloadButton({text, url}: ButtonTypes): JSX.Element {
        // imports first
        import { useState } from 'react'
        import DownloadButton from './molecules/DownloadButton'
        import './molecules/DownloadButton.css'

        // create state
        const [loading, setLoading] = useState<boolean>(true)

        // create handler
        const downloadButtonHandler = async (event) => {
          if (loading) {
            return
          }
          setLoading(true)
          const response = await fetch(url)
          const file = await response.json()
          fakeTriggerDownloadFunction(file)
        }

        // return your JSX
        return (
          &lt;Button onClick={downloadButtonHandler} className=&quot;DownloadButton&quot;&gt;{text}&lt;/Button&gt;
        )
      }

      # Use in another component

      import '../organisms/DownloadButton'

      export default function SomeComponent() {
        return (
          <div className=&quot;SomeComponent&quot;>
            { /* ... */ }
            <DownloadButton 
              text=&quot;Never do your homework again&quot;
              url=&quot;https://openai.com/download/chat-gpt-5&quot;
            />
          </div>
        )
      }
      "
      showLineNumbers={false}
    />
  </div>,
]

function Slides(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const onKeyDown = (event: React.KeyboardEvent<Document>) => {
    console.log('current slide before', currentSlide)
    if (event.code === 'ArrowRight') {
      if (slides.length === currentSlide + 1) {
        return
      }
      setCurrentSlide(slide => slide + 1)
    }
    if (event.code === 'ArrowLeft') {
      if (currentSlide === 0) {
        return
      }
      setCurrentSlide(currentSlide => currentSlide - 1)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [currentSlide])

  return slides[currentSlide]
}

export default function Structure(): JSX.Element {
  return (
    <div className="Structure">
      <Slides />
    </div>
  )
}
