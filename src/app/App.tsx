import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import LangSwither from 'widgets/LangSwitcher/LangSwither'

const Component = () => {}

function App () {
  const { theme } = useTheme()

    return (
      <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
              <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
          </Suspense>
        </div>
  );
}

export default App
