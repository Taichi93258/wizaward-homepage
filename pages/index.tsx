import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

    export default function Home() {
      return (
        <Layout
          title="トップページ"
          hero={
          <motion.section
            className={styles.hero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.heroImage}>
              <Image
                src="/images/hero.webp"
                alt="未来的なデジタル風景"
                fill
                priority
              />
            </div>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ようこそ、WizAward株式会社へ
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              当社は2023年7月の創業以来、AIを活用した革新的なWebソリューションを提供することで、
              お客様のビジネス変革を支援してまいりました。最新の機械学習技術と豊富な実績を活かし、
              データ解析から自動化システム構築まで幅広いニーズに対応いたします。
            </motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href="/contact">
                <button className={styles.ctaButton}>お問い合わせ</button>
              </Link>
            </motion.div>
          </motion.section>
          }
        >
          <motion.section
            className={`${styles.contentSection} ${styles.overlaySection}`}
            style={{ backgroundImage: "url('/images/service1.webp')" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              主なサービス領域は、データドリブンな意思決定を実現する分析基盤の構築、業務プロセスの自動化による生産性向上、カスタム機械学習モデルの設計・実装・運用など多岐にわたります。企画から運用・保守ま
              でワンストップでサポートし、迅速かつ確実な成果提供をお約束します。
            </p>
          </motion.section>

          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionImage}>
              <Image
                src="/images/service2.webp"
                alt="アジャイルプロジェクトのイメージ"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className={styles.sectionText}>
              <p>
                プロジェクトにはアジャイル手法を採用し、顧客との密なコミュニケーションを通じて要件の変化に柔軟に対応。納品後には高品質な成果物に対して高い評価と揺るぎない信頼をいただき、多くのお客様から継
    続的にご依頼をいただいております。
              </p>
            </div>
          </motion.section>

          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionText}>
              <p>
                テクノロジーを活用した課題解決や新規事業開発をご検討の際は、ぜひお気軽にお問い合わせください。当社が貴社のDX推進を全力でサポートいたします。
              </p>
            </div>
            <div className={styles.sectionImage}>
              <Image
                src="/images/service3.webp"
                alt="テクノロジー活用のイメージ"
                width={600}
                height={400}
                priority
              />
            </div>
          </motion.section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            サービスの特徴
          </motion.h2>
          <motion.section
            className={styles.features}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>分析基盤構築</h3>
              <p>データドリブンな意思決定を実現する分析基盤を構築します。</p>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>業務プロセス自動化</h3>
              <p>業務フローの自動化で生産性を向上させます。</p>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>機械学習モデル開発</h3>
              <p>カスタム機械学習モデルの設計・実装・運用を行います。</p>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>ワンストップサポート</h3>
              <p>企画から運用・保守まで一貫したサポートを提供します。</p>
            </motion.div>
          </motion.section>
        </Layout>
      );
    }
