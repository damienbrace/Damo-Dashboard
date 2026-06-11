import {
  ArrowUpRight,
  Car,
  ChevronDown,
  CircleDollarSign,
  Ellipsis,
  Home,
  ReceiptText,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";

const metrics = [
  { label: "This Week", value: "$342.52", detail: "of $600 budget", change: "+ 12%" },
  { label: "This Month", value: "$1,428.45", detail: "of $2,500 budget", change: "+ 8%" },
  { label: "Balance", value: "$4,231.87", detail: "Total across accounts" },
  { label: "Savings Rate", value: "24%", detail: "Good", change: "+ 3%" }
];

const categories = [
  { name: "Food & Dining", amount: "$128.40", share: "37%", icon: Utensils, tone: "pink" },
  { name: "Transport", amount: "$68.50", share: "20%", icon: Car, tone: "violet" },
  { name: "Shopping", amount: "$45.00", share: "13%", icon: ShoppingBag, tone: "blue" },
  { name: "Entertainment", amount: "$32.60", share: "9%", icon: CircleDollarSign, tone: "rose" },
  { name: "Bills & Utilities", amount: "$28.70", share: "8%", icon: Home, tone: "amber" },
  { name: "Other", amount: "$39.42", share: "13%", icon: Ellipsis, tone: "slate" }
];

const transactions = [
  { merchant: "Coles", date: "Today", amount: "-$78.35", category: "Food & Dining" },
  { merchant: "Uber", date: "Yesterday", amount: "-$34.00", category: "Transport" },
  { merchant: "Bunnings", date: "22 May", amount: "-$56.00", category: "Shopping" }
];

const budgets = [
  { name: "Food & Dining", used: "$128.40", total: "$200", percent: 64 },
  { name: "Transport", used: "$68.50", total: "$150", percent: 67 },
  { name: "Shopping", used: "$45.00", total: "$100", percent: 45 }
];

export default function FinancePage() {
  return (
    <AppShell title="Finance" subtitle="" actionLabel="Add Transaction">
      <div className="finance-page">
        <div className="finance-page-toolbar">
          <div className="finance-tabs">
            {["Overview", "Transactions", "Budgets", "Categories", "Reports"].map((tab, index) => (
              <button className={`finance-tab ${index === 0 ? "finance-tab-active" : ""}`} key={tab} type="button">
                {tab}
              </button>
            ))}
          </div>

          <button className="finance-more-button" title="More finance actions" type="button">
            <Ellipsis className="h-4 w-4" />
          </button>
        </div>

        <section className="finance-metrics" aria-label="Finance summary">
          {metrics.map((metric) => (
            <div className="finance-metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <div>
                <p>{metric.detail}</p>
                {metric.change ? (
                  <em>
                    <ArrowUpRight className="h-3 w-3" />
                    {metric.change}
                  </em>
                ) : null}
              </div>
            </div>
          ))}
        </section>

        <section className="finance-main-grid">
          <div className="finance-panel finance-chart-panel">
            <div className="finance-panel-header">
              <h2>Spending Overview</h2>
              <button className="finance-select" type="button">
                This Week
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="finance-chart-wrap" aria-label="Weekly spending chart">
              <div className="finance-y-axis">
                <span>$150</span>
                <span>$100</span>
                <span>$50</span>
                <span>$0</span>
              </div>
              <svg className="finance-chart" viewBox="0 0 520 210" role="img" aria-label="Spending rose through the week">
                <defs>
                  <linearGradient id="financeArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.24" />
                    <stop offset="75%" stopColor="#22d3ee" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 170 C35 130 60 148 82 154 C118 164 120 114 160 120 C194 126 198 168 232 150 C262 134 276 142 302 132 C334 116 342 70 382 66 C422 62 426 104 462 104 C488 104 494 82 520 76 L520 210 L0 210 Z"
                  fill="url(#financeArea)"
                />
                <path
                  d="M0 170 C35 130 60 148 82 154 C118 164 120 114 160 120 C194 126 198 168 232 150 C262 134 276 142 302 132 C334 116 342 70 382 66 C422 62 426 104 462 104 C488 104 494 82 520 76"
                  fill="none"
                  stroke="#22d3ee"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
              <div className="finance-x-axis">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="finance-panel">
            <div className="finance-panel-header">
              <h2>Top Categories</h2>
            </div>

            <div className="finance-category-list">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div className="finance-category-row" key={category.name}>
                    <span className={`finance-category-icon finance-tone-${category.tone}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <strong>{category.name}</strong>
                    <span>{category.amount}</span>
                    <em>{category.share}</em>
                  </div>
                );
              })}
            </div>

            <button className="finance-link" type="button">
              View all
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </section>

        <section className="finance-bottom-grid">
          <div className="finance-panel">
            <h2>Recent Transactions</h2>
            <div className="finance-transaction-list">
              {transactions.map((transaction) => (
                <div className="finance-transaction-row" key={transaction.merchant}>
                  <span>
                    <ReceiptText className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong>{transaction.merchant}</strong>
                    <p>{transaction.date}</p>
                  </div>
                  <time>{transaction.date}</time>
                  <div className="finance-transaction-amount">
                    <strong>{transaction.amount}</strong>
                    <p>{transaction.category}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="finance-link" type="button">
              View all
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="finance-panel">
            <h2>Budgets</h2>
            <div className="finance-budget-list">
              {budgets.map((budget) => (
                <div className="finance-budget-row" key={budget.name}>
                  <div>
                    <strong>{budget.name}</strong>
                    <span>
                      {budget.used} / {budget.total}
                    </span>
                    <em>{budget.percent}%</em>
                  </div>
                  <div className="finance-budget-track">
                    <span style={{ width: `${budget.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <button className="finance-link" type="button">
              View all
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
