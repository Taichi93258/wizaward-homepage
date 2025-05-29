import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import { client } from '../lib/cms';
import homeStyles from '../styles/Home.module.css';

interface ServicesProps {
  content: {
    title: string;
    body: string;
  };
}

interface ServiceItem {
  title: string;
  href: string;
  img: { src: string; alt: string; };
  comingSoon?: boolean;
}

const Services: NextPage<ServicesProps> = ({ content }) => {
  const [showDetails, setShowDetails] = useState(false);
  const serviceList: ServiceItem[] = [
    {
      title: 'skillboost5',
      href: 'https://skillboost5-wiz-xpdl.vercel.app/',
      img: { src: '/images/service4.webp', alt: 'skillboost5' },
    },
  ];

  const skill = serviceList.find(({ title }) => title === 'skillboost5');
  const others = serviceList.filter(({ title }) => title !== 'skillboost5');

  // Coming Soonサービスのダミーデータを追加
  const serviceListWithComingSoon: ServiceItem[] = [
    ...serviceList,
    {
      title: 'next-service',
      href: '#', // 仮のリンク
      img: { src: '/images/placeholder.webp', alt: 'Coming Soon' }, // 仮の画像
      comingSoon: true,
    },
  ];

  return (
    <Layout title={content.title}>
      {serviceListWithComingSoon.map((service) => (
        <div key={service.title} className={homeStyles.serviceCardWrapper}>
          {service.comingSoon ? (
            // Coming Soonカードの表示
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h2 style={{ color: '#555', fontSize: '2rem', textAlign: 'center' }}>
                Coming Soon...
              </h2>
            </div>
          ) : (
            // SkillBoost5カードの表示 (既存の内容)
            <>
              <div className={homeStyles.serviceImageContainer} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <a href={service.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={service.img.src || ''}
                    alt={service.img.alt || ''}
                    width={320}
                    height={320}
                    priority
                    style={{ borderRadius: '50%', boxShadow: '0 2px 16px rgba(0,0,0,0.3)' }}
                  />
                </a>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ color: '#1976d2', fontWeight: 700, fontSize: '2.5rem', textAlign: 'center', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  {service.title}
                  <div style={{ fontSize: '1.2rem', color: '#555', fontWeight: 700, marginTop: '0.7rem', display: 'inline-block' }}>
                    あなたのスキルアップを加速させる学習プラットフォーム
                  </div>
                </h2>
                <button
                  onClick={() => setShowDetails(true)}
                  style={{
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 24,
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    marginBottom: '1.5rem',
                    marginTop: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  詳細を見る
                </button>
              </div>
              {/* モーダル */}
              {showDetails && (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.5)',
                  zIndex: 1000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                  onClick={() => setShowDetails(false)}
                >
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.98)',
                      borderRadius: 16,
                      boxShadow: '0 2px 32px rgba(0,0,0,0.18)',
                      padding: '2.5rem 2rem',
                      maxWidth: 500,
                      width: '90%',
                      color: '#222',
                      position: 'relative',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowDetails(false)}
                      style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'transparent',
                        border: 'none',
                        fontSize: 24,
                        cursor: 'pointer',
                        color: '#1976d2',
                      }}
                      aria-label="閉じる"
                    >
                      ×
                    </button>
                    <h3>主な特徴</h3>
                    <ul>
                      <li>カテゴリー別の体系的な学習コンテンツ</li>
                      <li>レベル別の段階的な学習システム</li>
                      <li>学習進捗の可視化と継続的なモチベーション維持</li>
                      <li>美しく使いやすいインターフェース</li>
                      <li>モバイルフレンドリーなデザイン</li>
                    </ul>
                    <h3>学習の流れ</h3>
                    <ol>
                      <li>カテゴリーを選択</li>
                      <li>レベルに応じた問題に挑戦</li>
                      <li>進捗状況を確認しながら継続的に学習</li>
                    </ol>
                    <h3>特長的な機能</h3>
                    <ul>
                      <li>連続学習日数の記録</li>
                      <li>学習履歴の管理</li>
                      <li>直感的なナビゲーション</li>
                      <li>セキュアなユーザー認証</li>
                    </ul>
                    <p style={{ marginTop: '1.5rem' }}>SkillBoost5で、あなたのスキルアップの旅を始めましょう。</p>
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        background: '#1976d2',
                        color: '#fff',
                        borderRadius: 24,
                        padding: '0.75rem 2rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        marginTop: '1.5rem',
                        fontWeight: 600,
                      }}
                    >
                      SkillBoost5を始める
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      {others.length > 0 && (
        <section className={homeStyles.features}>
          {others.map(({ title, href, img }) => (
            <div key={title} className={homeStyles.featureCard}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  priority
                  style={{ borderRadius: 8 }}
                />
                <h3 style={{ marginTop: '1rem' }}>{title}</h3>
              </a>
            </div>
          ))}
        </section>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const content = await client.get<ServicesProps['content']>({ endpoint: 'services' });
  return { props: { content } };
};

export default Services;
