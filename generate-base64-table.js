// サンプルトークン30個を生成してBase64エンコーディングを1-3回適用

const sampleTokens = [
  // GitHub風トークン
  "ghp_1234567890abcdefGHIJKLMNOPQRSTUVWXYZ12",
  "ghs_abcdef123456789ABCDEF123456789abcdef12",
  "github_pat_22AAAAAAA_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  
  // AWS風アクセスキー
  "AKIAIOSFODNN7EXAMPLE",
  "ASIATESTACCESSKEYEXAMPLE",
  "AROA123DEFGHIJKLMNOP",
  
  // JWT風トークン
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0",
  
  // API風キー
  "sk-proj-abcdefghijk1234567890ABCDEFGH",
  "api_key_7f3e4b9a2c6d8e1f5a9b3c7d2e8f4a6b",
  "secret_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
  
  // ランダムな文字列パターン
  "Bearer abc123def456ghi789jkl012mno345",
  "token_2024_prod_a1b2c3d4e5f6g7h8i9j0",
  "key-9876543210-fedcba-zyxwvu-tsrqpo",
  
  // データベース接続文字列風
  "postgresql://user:pass@localhost:5432/db",
  "mongodb+srv://admin:password@cluster.mongodb.net",
  "mysql://root:secretpass@127.0.0.1:3306/database",
  
  // OAuth風トークン
  "oauth2_token_1234567890abcdefghijklmn",
  "refresh_token_zyxwvutsrqponmlkjihgfedcba",
  "access_token_0987654321fedcba1234567890",
  
  // Slack/Discord風
  "xoxb-123456789012-1234567890123-abcdefghijklmnopqrstuvwx",
  "discord_bot_token_OTk4NjIwNzI5MDk0NzA5MjU4",
  
  // Stripe風
  "sk_live_4eC39HqLyjWDarjtT1zdp7dc8fQ2wZXm",
  "pk_test_51H4GvKJrTzK6Qz8yN3mLpR9sT2uV1wX5y",
  
  // Firebase風
  "AIzaSyDOCAbC123dEf456GhI789jKl012mNOp345",
  
  // その他のパターン
  "private_key_8f7e6d5c4b3a2918273645362718293",
  "session_id_abc123xyz789def456ghi012jkl345",
  "auth_token_qwertyuiopasdfghjklzxcvbnm123456",
  "credential_2024_12_25_a1b2c3d4e5f6g7h8"
];

// Base64エンコーディング関数
function encodeBase64Multiple(str, times) {
  let result = str;
  for (let i = 0; i < times; i++) {
    result = Buffer.from(result).toString('base64');
  }
  return result;
}

// テーブル生成
console.log('# Base64 エンコーディング サンプルテーブル\n');
console.log('| No | 元のトークン (最初の40文字) | Base64 x1 | Base64 x2 | Base64 x3 |');
console.log('|----|------------------------------|-----------|-----------|-----------|');

sampleTokens.forEach((token, index) => {
  const truncated = token.length > 40 ? token.substring(0, 37) + '...' : token;
  const base64_1 = encodeBase64Multiple(token, 1);
  const base64_2 = encodeBase64Multiple(token, 2);
  const base64_3 = encodeBase64Multiple(token, 3);
  
  // 長いエンコード結果は最初の30文字と最後の10文字を表示
  const truncateEncoded = (str) => {
    if (str.length > 45) {
      return str.substring(0, 30) + '...' + str.substring(str.length - 10);
    }
    return str;
  };
  
  console.log(`| ${(index + 1).toString().padStart(2, '0')} | \`${truncated}\` | \`${truncateEncoded(base64_1)}\` | \`${truncateEncoded(base64_2)}\` | \`${truncateEncoded(base64_3)}\` |`);
});

console.log('\n## 多層エンコーディングの特徴\n');
console.log('- **Base64 x1**: 元の文字列の約1.33倍のサイズ');
console.log('- **Base64 x2**: 元の文字列の約1.78倍のサイズ');
console.log('- **Base64 x3**: 元の文字列の約2.37倍のサイズ');
console.log('- **Base64 x4以降**: 「Vm0wd」プレフィックスが現れる');