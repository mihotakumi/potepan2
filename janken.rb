def main()
    jankenResult = -1
    isFinished = false
    while !isFinished do
        result = IsGameDecided(jankenResult)
        jankenResult = result[0]
        isFinished = result[1]
    end
end

def IsGameDecided(previousResult)
    result = 0
    isFinished = false
    return result, isFinished
end

def IsGameDecided(previousResult)
    if previousResult == 2
        puts "あいこで..."
    elsif
        puts "じゃんけん..."
    end
    
jankenResult = JankenResult()
    if jankenResult == 2
    return jankenResult, false
    end

if !IsAhoiDecided()
    return jankenResult, false
end

if jankenResult == 1
    puts "やったー！勝った！"
else
    puts "残念、負けたー！"
end
    return jankenResult, true
end

def JankenResult
    choices = ["グー","チョキ","パー","戦わない"]
    ShowStartMessage(choices)
    
    player_hand = gets.to_i
    program_hand = rand(choices.size)
    ShowChoiceInfo(choices[player_hand], choices[program_hand])
    
    result = 0
    if player_hand == program_hand
        result = 2
    elsif ((player_hand == 0 && program_hand == 1) || (player_hand == 1 && program_hand == 2) || (player_hand == 2 && program_hand == 0))
        result = 1
    end
    return result
end

def IsAhoiDecided
    puts "あっち向いて〜"
    choices = ["上","下","左","右"]
    ShowStartMessage(choices)
        
    player_direction = gets.to_i
    program_direction = rand(choices.size)
    ShowChoiceInfo(choices[player_direction], choices[program_direction])
        
    return (player_direction == program_direction)
end
      
def ShowStartMessage(choices)
    numChoices = choices.size
    for i in 0..(numChoices-1) do
        puts i.to_s + "(" + choices[i] + ")"
    end
end
    
def ShowChoiceInfo(playerChoiceString, programChoiceString)
    puts "ホイ！"
    separator = "------------------"
    puts separator
    puts "あなた：#{playerChoiceString}を出しました"
    puts "相手：#{programChoiceString}を出しました"
    puts separator
end

main()    