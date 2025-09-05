import React, { useState, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Sparkles } from "lucide-react";

interface Puzzle {
  id: string;
  fen: string;
  moves: string[];
  prompt: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const PuzzleOfTheDay: React.FC = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [moveIndex, setMoveIndex] = useState(0);
  const [feedback, setFeedback] = useState<{
    type: "correct" | "incorrect" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  // Sample puzzles database
  const puzzles: Puzzle[] = [
    {
      id: "1",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 4 4",
      moves: [
        "Bxf7+",
        "Kxf7",
        "Ne5+",
        "Ke8",
        "Qh5+",
        "g6",
        "Qxg6+",
        "hxg6",
        "Nxg6#",
      ],
      prompt: "White to move and win",
      difficulty: "Medium",
    },
    {
      id: "2",
      fen: "r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1",
      moves: ["Qa5+", "Nc6", "Bxc6+", "bxc6", "Qxc6+", "Kd8", "Qd7#"],
      prompt: "White to move and checkmate",
      difficulty: "Hard",
    },
    {
      id: "3",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2",
      moves: [
        "Qh4+",
        "g3",
        "Qxg3+",
        "hxg3",
        "Bc4",
        "Qh5+",
        "Ke2",
        "Qf3+",
        "Kd3",
        "Qd1#",
      ],
      prompt: "Black to move and win",
      difficulty: "Easy",
    },
  ];

  // Initialize puzzle
  useEffect(() => {
    loadPuzzle();
  }, []);

  const loadPuzzle = () => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setCurrentPuzzle(randomPuzzle);
    const newGame = new Chess(randomPuzzle.fen);
    setGame(newGame);
    setMoveIndex(0);
    setFeedback({ type: null, message: "" });
    setIsPuzzleComplete(false);
    setShowAnimation(false);
  };

  const onSquareClick = (square: string) => {
    if (isPuzzleComplete) return;

    // Simple move validation - for demo purposes, we'll accept any move
    // In a real implementation, you'd validate the move properly
    const gameCopy = new Chess(game.fen());
    const moves = gameCopy.moves({ verbose: true });

    if (moves.length > 0) {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      const result = gameCopy.move(randomMove);

      if (result) {
        setGame(gameCopy);

        // Check if this matches the expected move sequence
        const expectedMove = currentPuzzle?.moves[moveIndex];
        if (result.san === expectedMove) {
          setMoveIndex((prev) => prev + 1);

          if (moveIndex + 1 >= (currentPuzzle?.moves.length || 0)) {
            // Puzzle completed
            setIsPuzzleComplete(true);
            setFeedback({
              type: "correct",
              message: "Brilliant! Puzzle solved! 🎉",
            });
            setShowAnimation(true);
          } else {
            setFeedback({
              type: "correct",
              message: "Excellent move! Keep going...",
            });
          }
        } else {
          setFeedback({
            type: "incorrect",
            message: "Not quite right. Try again!",
          });
        }
      }
    }
  };

  const resetPuzzle = () => {
    if (currentPuzzle) {
      const newGame = new Chess(currentPuzzle.fen);
      setGame(newGame);
      setMoveIndex(0);
      setFeedback({ type: null, message: "" });
      setIsPuzzleComplete(false);
      setShowAnimation(false);
    }
  };

  const nextPuzzle = () => {
    loadPuzzle();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Hard":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-chess-gold/20 text-chess-gold border-chess-gold/30";
    }
  };

  const getPieceSymbol = (type: string, color: string) => {
    const symbols: { [key: string]: { [key: string]: string } } = {
      k: { w: "♔", b: "♚" },
      q: { w: "♕", b: "♛" },
      r: { w: "♖", b: "♜" },
      b: { w: "♗", b: "♝" },
      n: { w: "♘", b: "♞" },
      p: { w: "♙", b: "♟" },
    };
    return symbols[type]?.[color] || "";
  };

  return (
    <motion.section
      className="py-20 px-4 md:px-8 bg-chess-charcoal relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-chess-gold/10 via-transparent to-chess-gold/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 border border-chess-gold/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-chess-gold/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-chess-gold/20 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-chess-gold flex items-center justify-center gap-3">
            <span className="text-6xl">🧩</span>
            Puzzle of the Day
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Test your skills with a new challenge every day
          </p>
          {currentPuzzle && (
            <div className="flex items-center justify-center gap-4">
              <Badge
                className={`px-4 py-2 text-sm font-medium ${getDifficultyColor(
                  currentPuzzle.difficulty
                )}`}
              >
                {currentPuzzle.difficulty}
              </Badge>
              <div className="text-chess-gold/80 text-sm">
                Move {moveIndex + 1} of {currentPuzzle.moves.length}
              </div>
            </div>
          )}
        </motion.div>

        {/* Chess Board Container */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Chess Board */}
          <Card className="bg-chess-dark border-chess-gold/20 shadow-elegant p-6">
            <CardContent className="p-0">
              <div
                ref={boardRef}
                className="relative chess-puzzle-board"
                style={{ width: "400px", height: "400px" }}
              >
                <div className="chess-board">
                  {Array.from({ length: 8 }, (_, row) =>
                    Array.from({ length: 8 }, (_, col) => {
                      const square = String.fromCharCode(97 + col) + (8 - row);
                      const piece = game.get(square as any);
                      const isLight = (row + col) % 2 === 0;

                      return (
                        <div
                          key={square}
                          className={`chess-square ${
                            isLight ? "light" : "dark"
                          }`}
                          onClick={() => onSquareClick(square)}
                        >
                          {piece && (
                            <span className="chess-piece">
                              {getPieceSymbol(piece.type, piece.color)}
                            </span>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Glow effect when puzzle is complete */}
                {showAnimation && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-chess-gold/20 via-chess-gold/40 to-chess-gold/20 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Puzzle Info and Controls */}
          <div className="space-y-6 w-full lg:w-auto">
            {/* Puzzle Prompt */}
            <Card className="bg-chess-dark border-chess-gold/20 shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-chess-gold text-lg">
                  {currentPuzzle?.prompt || "Loading puzzle..."}
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Feedback Area */}
            {feedback.type && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Card
                  className={`border-2 ${
                    feedback.type === "correct"
                      ? "border-green-500/50 bg-green-500/10"
                      : "border-red-500/50 bg-red-500/10"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center gap-2 text-lg">
                      {feedback.type === "correct" ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-400" />
                      )}
                      <span
                        className={
                          feedback.type === "correct"
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {feedback.message}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Control Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetPuzzle}
                variant="outline"
                className="bg-chess-dark border-chess-gold/30 text-chess-gold hover:bg-chess-gold/10 hover:border-chess-gold/50 transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>

              <Button
                onClick={nextPuzzle}
                className="bg-gradient-to-r from-chess-gold to-chess-gold-light text-chess-dark hover:from-chess-gold-light hover:to-chess-gold transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow/80 chess-puzzle-glow"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Next Puzzle
              </Button>
            </div>

            {/* Progress Indicator */}
            {currentPuzzle && (
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Progress</div>
                <div className="w-full bg-chess-dark/50 rounded-full h-2 border border-chess-gold/20">
                  <motion.div
                    className="bg-gradient-to-r from-chess-gold to-chess-gold-light h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        (moveIndex / currentPuzzle.moves.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Each puzzle is carefully selected to challenge different aspects of
            your chess game. Practice daily to improve your tactical vision and
            calculation skills.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PuzzleOfTheDay;
