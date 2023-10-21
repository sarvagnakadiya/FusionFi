import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../ConnectButton/ConnectButtonCustom.css";
const ConnectButtonCustom = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="connect-btn"
                    type="button"
                    style={{
                      padding: "15px 30px",
                      background:
                        "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                      color: "black",
                      border: "none",
                      borderRadius: "10px",
                      width: "100%",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    style={{
                      padding: "15px 30px",
                      background:
                        "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                      color: "black",
                      border: "none",
                      borderRadius: "10px",
                      width: "100%",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{
                      display: "flex",
                      alignItems: "center",

                      background:
                        "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                      color: "black",
                      border: "none",
                      padding: "15px 30px ",

                      borderRadius: "10px",

                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    className="coonect-btn"
                    type="button"
                    style={{
                      padding: "15px 30px ",
                      background:
                        "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                      color: "black",
                      border: "none",
                      borderRadius: "10px",

                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default ConnectButtonCustom;
