import { CodeBlock, dracula } from 'react-code-blocks'
import imgMacro from '../../assets/slides/macro.jpg'
import imgMicro from '../../assets/slides/snowflake.jpg'
import imgEmeril from '../../assets/slides/emeril.jpg'
import imgSpaghetti from '../../assets/slides/spaghetti.jpeg'
import imgQuestions from '../../assets/slides/questions.avif'

const SlideContent = [
  <h1>Structuring React Components</h1>,
  <h1 className="text-4xl">
    <span className="text-6xl italic">React doesn't care</span>
    <br />
    how you structure your components
  </h1>,

  <h1>THE END</h1>,

  <h1>just kidding</h1>,

  <img className="max-w-[75%] m-auto" src={imgMacro} />,

  <img className="max-w-[50%] m-auto" src={imgMicro} />,

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

  <img className="min-w-[50%] m-auto" src={imgEmeril} />,

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
      }: Props) {
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
      <strong>Atomic Design &mdash; Button atom</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      components/
        atoms/
          Button.css
          Button.tsx

      /* Button.css &mdash; I like using BEM */
      .Button {
        background-color: #cfd;
        &--active {
          background-color: #fff;
        }
      }

      # Button.tsx
      import './Button.css'

      interface ButtonProps {
        text?: string
        onClick: () => void
      }

      export default function Button({text='Imma Button!', onClick}: ButtonProps): JSX.Element {
        // simple example &mdash; more soon
        return (
          <button
            onClick={onClick}
            className=&quot;Button&quot;
          &gt;
            {text}
          &lt;/button&gt;
        )
      }
      "
      showLineNumbers={false}
    />
  </div>,
  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Atomic Design &mdash; DownloadButton.tsx</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      # Button.tsx
      interface ButtonTypes {
        text: string
        onClick: () => void
      }

      export default function DownloadButton({text, onClick}: ButtonTypes): JSX.Element {
        // imports first
        import Button from './atoms/Button'
        import Icon from './atoms/Icon'
        import './DownloadButton.css'

        return (
          &lt;Button
            onClick={onClick}
            className=&quot;DownloadButton&quot;&gt;
            {text}
            &lt;Icon type=&quot;download&quot; /&gt;
          &lt;/Button&gt;
        )
      }

      # Use in another component
      # SomeComponent.tsx

      import '../organisms/DownloadButton'

      interface SomeComponentProps {
        downloadChatGPT: () => void
      }

      export default function SomeComponent({downloadChatGPT}: SomeComponentProps) {
        return (
          <div className=&quot;SomeComponent&quot;>
            { /* ... */ }
            <DownloadButton 
              text=&quot;Never do your homework again&quot;
              onClick={() => downloadChatGPT()}
            />
          </div>
        )
      }
      "
      showLineNumbers={false}
    />
  </div>,
  <h1>Putting it all together</h1>,
  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>Atomic Design &mdash; Pages &amp; Templates</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      # pages/RegisterUserPage.tsx

      export default function RegisterUserPage() {
        import '../templates/RegisterUser'

        // This would probably be imported from /services somehow
        const registerUserService = async (username, password) => {
          fetch('/register-user', { ... })
        }

        return (
          <RegisterUser registerUserService={registerUserService} />
        )
      }

      # templates/RegisterUser.tsx

      import './Button'

      interface Props {
        registerUserService: Promise<string, string>
      }

      export default function RegisterUser({registerUserService}: Props) {
        // component state
        const [username, setUsername] = useState<string>('')
        const [password, setPassword] = useState<string>('')

        // API calls
        const onSubmit = (e) => {
          // validation then call to server
          const response = await registerUserService(username, password, /* ... */)
          // ...
        }

        const onInput = (e, value) => {
          // input handlers
          // ...
        }

        return (
          <form className=&quot;RegisterUser&quot;>
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

  <h1>Keep it short</h1>,
  <h1>Keep it DRY</h1>,
  <h1>Refactor</h1>,

  <img className="max-w-[40%] m-auto" src={imgSpaghetti} />,

  <div className="text-left min-w-[768px]">
    <h2 className="py-6">
      <strong>A typical React application structure</strong>
    </h2>
    <CodeBlock
      language="javascript"
      text="
      assets/
      components/
        atoms/
        molecules/
        organisms/
        templates/
      config/
      constants/
      hooks/
      pages/
      routes/
      services/
      store/
      stories/
      styles/
      types/
      utilities/
      App.tsx
      main.tsx
      ...
      "
      showLineNumbers={false}
    />
  </div>,

  <h1>
    <span className="text-sm">(actually)</span>THE END
  </h1>,

  <img className="max-w-[70%] m-auto" src={imgQuestions} />,
]

export default SlideContent
