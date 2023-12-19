import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('О сайте')}</h1>

        </Page>
    );
}

export default AboutPage;
