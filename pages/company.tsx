import Layout from '../components/Layout';

export default function Company() {
  return (
    <Layout title="会社概要">
      <section className="white-text">
        <p>
          WizAward株式会社は2023年7月に創業し、
          AI技術を活用したWebソリューションの開発を行っております。
          これまでに多くのAI開発案件を受注・納品し、顧客からは高い評価と揺るぎない信頼を頂戴してまいりました。
          データ解析や業務自動化、機械学習モデルの構築を通じて、
          クライアントのDX推進をワンストップでサポートいたします。
          今後も最先端の技術ときめ細やかなサービスで、
          ビジネスの成長と革新に貢献し続けることをお約束します。
        </p>
        <h2>会社概要</h2>
        <dl>
          <dt>設立</dt>
          <dd>2023年7月</dd>
          <dt>所在地</dt>
          <dd>埼玉県新座市</dd>
          <dt>代表取締役</dt>
          <dd>會澤 大智</dd>
        </dl>
      </section>
    </Layout>
  );
}
