from rich import print
import os

def cmd_help():
    print("[bold cyan]Available commands:[/bold cyan]")
    print("""
  help          Show this help menu
  neofetch      Display system info (mock Ubuntu 25.04)
  list          List simulated Ubuntu 25.04 packages
  clear         Clear screen
  exit          Exit simulator
""")

def cmd_neofetch():
    print("""
[bold green]Ubuntu 25.04 (Lunar Lynx) – Mock Build[/bold green]
Kernel: 6.8.0-sim
Shell: Simulated TUI
Packages: 42 (mock)
Memory: 8GB (virtualized)
""")

def cmd_list():
    print("""
Simulated Ubuntu 25.04 packages:
  - systemd 256
  - GNOME 47.1
  - Python 3.13
  - Wayland 2.1
  - Linux Kernel 6.8-sim
""")

def cmd_clear():
    os.system("clear")
