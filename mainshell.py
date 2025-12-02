from prompt_toolkit import PromptSession
from rich import print
from .commands import cmd_help, cmd_neofetch, cmd_list, cmd_clear

def main():
    print("[bold green]Ubuntu 25.04 Simulator[/bold green]")
    print("Type 'help' to get started.\n")

    session = PromptSession()

    while True:
        try:
            command = session.prompt("ubuntu-25.04> ").strip()
        except KeyboardInterrupt:
            continue
        except EOFError:
            break
        
        if not command:
            continue
        
        if command == "help":
            cmd_help()
        elif command == "neofetch":
            cmd_neofetch()
        elif command == "list":
            cmd_list()
        elif command == "clear":
            cmd_clear()
        elif command == "exit":
            print("[yellow]Exiting Ubuntu 25.04 simulator...[/yellow]")
            break
        else:
            print(f"[red]Command not found:[/red] {command}")

if __name__ == "__main__":
    main()
